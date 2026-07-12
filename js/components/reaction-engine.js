// GlowHit 核心互動反應引擎 - 嚴格對齊 2026 最新測試規範
window.GlowHitEngine = {
    mode: 'speed',          // 'speed' (光速反應) 或 'color' (紅藍辨識)
    isActive: false,
    score: 0,
    startTime: 0,
    turnStartTime: 0,
    totalReactionTime: 0,
    hitCount: 0,
    
    // 定時器變數
    gameTimeout: null,      // 30秒總遊戲倒數
    stepTimeout: null,      // 模式二專用：1.5秒強制移位定時器
    timeLeft: 30,
    
    // 節點顏色定義 (對齊 Tailwind CSS 視覺)
    colors: {
        off: 'bg-gray-200 shadow-inner',
        blue: 'bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)] scale-95 border-2 border-blue-300',
        red: 'bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)] scale-95 border-2 border-red-300'
    },
    
    // 當前亮燈狀態記錄
    activeNodes: {}, // 格式: { nodeId: 'blue' | 'red' }

    init: function(mode) {
        this.mode = mode;
        this.isActive = true;
        this.score = 0;
        this.totalReactionTime = 0;
        this.hitCount = 0;
        this.timeLeft = 30;
        this.activeNodes = {};
        
        // 清除可能殘留的定時器
        if (this.gameTimeout) clearInterval(this.gameTimeout);
        if (this.stepTimeout) clearTimeout(this.stepTimeout);
        
        this.resetAllNodesUI();
        this.startTime = Date.now();
        
        // 啟動 30 秒總時間倒數
        this.startCountdown();
        
        // 進入第一回合循環
        this.nextTurn();
    },

    // 啟動總時間倒數
    startCountdown: function() {
        const self = this;
        this.gameTimeout = setInterval(() => {
            self.timeLeft--;
            // 更新 UI 上的剩餘時間
            const timeEl = document.getElementById('simTime');
            if (timeEl) timeEl.innerText = self.timeLeft;
            
            if (self.timeLeft <= 0) {
                self.endGame();
            }
        }, 1000);
    },

    // 核心回合邏輯（核心對齊圖片規則）
    nextTurn: function() {
        if (!this.isActive) return;
        
        // 1. 每回合開始，先把所有燈熄滅並清除上回合的強制移位定時器
        this.resetAllNodesUI();
        if (this.stepTimeout) clearTimeout(this.stepTimeout);
        this.activeNodes = {};
        
        // 記錄本回合亮燈的起算時間
        this.turnStartTime = Date.now();
        
        // 2. 根據不同模式套用指定亂數邏輯
        if (this.mode === 'speed') {
            /**
             * 規則 1：Light Speed Reaction
             * 亮燈：純藍燈 / 干擾：無
             * 邏輯：1~3 號機完全隨機亂數抽點，拍對即換位。
             */
            const randomNodeId = Math.floor(Math.random() * 3) + 1; // 隨機抽 1, 2, 3 號機
            this.activeNodes[randomNodeId] = 'blue';
            this.setNodeUI(randomNodeId, this.colors.blue);
            
        } else if (this.mode === 'color') {
            /**
             * 規則 2：Red/Blue Identification
             * 亮燈：純藍燈 / 干擾：純紅燈
             * 邏輯：同時隨機抽兩台亮燈。若 1.5 秒內未拍打自動強制移位！
             */
            // 隨機抽選兩個不同的節點 (從可用節點 1~3 中，若畫面有更多節點可彈性支援)
            let nodeA = Math.floor(Math.random() * 3) + 1;
            let nodeB = Math.floor(Math.random() * 3) + 1;
            while (nodeA === nodeB) {
                nodeB = Math.floor(Math.random() * 3) + 1;
            }
            
            // 隨機決定誰藍誰紅（50% 機率互換）
            if (Math.random() > 0.5) {
                this.activeNodes[nodeA] = 'blue'; // 目標
                this.activeNodes[nodeB] = 'red';  // 干擾
            } else {
                this.activeNodes[nodeA] = 'red';  // 干擾
                this.activeNodes[nodeB] = 'blue'; // 目標
            }
            
            // 更新物理節點視覺
            this.setNodeUI(nodeA, this.activeNodes[nodeA] === 'blue' ? this.colors.blue : this.colors.red);
            this.setNodeUI(nodeB, this.activeNodes[nodeB] === 'blue' ? this.colors.blue : this.colors.red);
            
            // 【核心動態時間壓力】：開啟 1.5 秒強制移位定時器
            const self = this;
            this.stepTimeout = setTimeout(() => {
                // 1.5 秒內未拍打成功，自動強制換位，不計得分
                self.nextTurn();
            }, 1500); // 1500 毫秒 = 1.5 秒
        }
    },

    // 處理使用者拍打打擊事件
    handleNodeClick: function(nodeId) {
        if (!this.isActive) return;
        
        const targetStatus = this.activeNodes[nodeId];
        
        if (targetStatus === 'blue') {
            // 1. 【拍對目標】：計算反應時間
            const reactionTime = Date.now() - this.turnStartTime;
            this.totalReactionTime += reactionTime;
            this.hitCount++;
            this.score += 10; // 命中加分
            
            // 播放命中音效
            if (window.playSound) window.playSound('hit');
            
            // 更新介面得分與平均反應時間
            this.updateStatsUI();
            
            // 拍對即刻換位進入下一輪
            this.nextTurn();
            
        } else if (targetStatus === 'red') {
            // 2. 【拍到紅燈干擾】：扣分處罰或震動提示，且本回合不換位（直到1.5秒強制定時器觸發或點對藍燈）
            this.score = Math.max(0, this.score - 5); 
            if (window.playSound) window.playSound('error');
            this.updateStatsUI();
            
            // 視覺上給予短暫閃爍警示
            const nodeEl = document.getElementById(`node-${nodeId}`);
            if (nodeEl) {
                nodeEl.classList.add('animate-shake');
                setTimeout(() => nodeEl.classList.remove('animate-shake'), 300);
            }
        }
        // 若拍打未亮燈的 gray 節點，則不做任何處置
    },

    // 結束遊戲與數據結算
    endGame: function() {
        this.isActive = false;
        clearInterval(this.gameTimeout);
        if (this.stepTimeout) clearTimeout(this.stepTimeout);
        
        this.resetAllNodesUI();
        
        const avgReact = this.hitCount > 0 ? Math.round(this.totalReactionTime / this.hitCount) : 0;
        
        // 彈出結算視窗 (相容系統語系)
        const t = window.translations[document.getElementById('langSelect').value] || window.translations.zh;
        alert(`${t.alertEnd}\n${t.alertScore}${this.score}\n${t.alertAvgReact}${avgReact} ${t.ms}\n${t.alertHits}${this.hitCount}`);
        
        // 還原控制台按鈕狀態
        const startBtn = document.getElementById('startBtn');
        if (startBtn) {
            startBtn.innerText = t.startBtnText;
            startBtn.classList.remove('bg-red-500', 'hover:bg-red-600');
            startBtn.classList.add('apple-btn-primary');
        }
    },

    // 輔助函式：重設所有模擬節點外觀
    resetAllNodesUI: function() {
        for (let i = 1; i <= 3; i++) {
            const node = document.getElementById(`node-${i}`);
            if (node) {
                node.className = `w-24 h-24 md:w-28 md:h-24 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-150 active:scale-95 ${this.colors.off}`;
            }
        }
    },

    // 輔助函式：設定單一節點外觀
    setNodeUI: function(nodeId, className) {
        const node = document.getElementById(`node-${nodeId}`);
        if (node) {
            // 先還原基本樣式，再疊加亮燈樣式
            node.className = `w-24 h-24 md:w-28 md:h-24 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-150 active:scale-95 ${className}`;
        }
    },

    // 輔助函式：即時渲染數據到控制面板
    updateStatsUI: function() {
        const scoreEl = document.getElementById('simScore');
        const reactEl = document.getElementById('simReact');
        
        if (scoreEl) scoreEl.innerText = this.score;
        if (reactEl && this.hitCount > 0) {
            reactEl.innerText = `${Math.round(this.totalReactionTime / this.hitCount)}ms`;
        }
    }
};