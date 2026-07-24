window.renderSimulator = function(app, t) {
    app.innerHTML = `
        <section class="max-w-4xl mx-auto px-6 pt-12">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight">${t.simTitle}</h2>
                <p class="text-gray-500 mt-3">${t.simDesc}</p>
            </div>
            
            <!-- 模式切換頁籤 -->
            <div class="flex justify-center bg-gray-200 p-1.5 rounded-full mb-12 max-w-lg mx-auto">
                <button onclick="window.setSimMode('speed')" id="tab-speed" class="flex-1 py-2 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${t.tabSpeed}</button>
                <button onclick="window.setSimMode('color')" id="tab-color" class="flex-1 py-2 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${t.tabColor}</button>
                <button onclick="window.setSimMode('home')" id="tab-home" class="flex-1 py-2 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${t.tabHome}</button>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <!-- 左側：實體模擬牆面與測試面板 -->
                <div class="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center">
                    <div id="simulatedWall" class="grid grid-cols-3 gap-6 p-4 bg-gray-50 rounded-3xl border border-gray-200 w-full min-h-[320px] items-center justify-items-center"></div>
                    
                    <div id="gameDashboard" class="mt-8 w-full border-t border-gray-100 pt-6 grid grid-cols-3 gap-2 text-center text-xs">
                        <div><p class="text-gray-400 font-medium" id="lblScore">${t.scoreLabel}</p><p id="scoreVal" class="text-2xl font-bold text-black mt-1">0</p></div>
                        <div><p class="text-gray-400 font-medium" id="lblTime">${t.timeLabel}</p><p id="timeVal" class="text-2xl font-bold text-black mt-1">30s</p></div>
                        <div><p class="text-gray-400 font-medium" id="lblReact">${t.reactLabel}</p><p id="reactVal" class="text-2xl font-bold text-black mt-1">0ms</p></div>
                    </div>
                    <button id="startGameBtn" onclick="window.toggleGame()" class="mt-8 w-full py-3.5 rounded-full font-medium apple-btn-primary shadow-md cursor-pointer">${t.startBtnText}</button>
                </div>
                
                <!-- 右側：居家控制面板與電網安全監視器 -->
                <div class="lg:col-span-5 space-y-6">
                    <div id="homeControlPanel" class="apple-card p-6 hidden">
                        <h4 class="font-bold text-lg mb-4 flex items-center space-x-2"><i data-lucide="home" class="w-5 h-5 text-indigo-500"></i><span>${t.homeTitle}</span></h4>
                        <div class="space-y-6 text-sm">
                            <div><div class="flex justify-between mb-2"><span class="text-gray-500 font-medium">${t.homeHue}</span><span id="hueText" class="font-bold">180°</span></div><input type="range" id="hueRange" min="0" max="360" value="180" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()"></div>
                            <div><div class="flex justify-between mb-2"><span class="text-gray-500 font-medium">${t.homeSat}</span><span id="satText" class="font-bold">85%</span></div><input type="range" id="satRange" min="0" max="100" value="85" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()"></div>
                            <div><div class="flex justify-between mb-2"><span class="text-gray-500 font-medium">${t.homeBri}</span><span id="briText" class="font-bold">60%</span></div><input type="range" id="briRange" min="0" max="100" value="60" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()"></div>
                            <div><div class="flex justify-between mb-2"><span class="text-gray-500 font-medium">${t.homeTemp}</span><span id="tempText" class="font-bold">4500K</span></div><input type="range" id="tempRange" min="2700" max="6500" step="100" value="4500" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()"></div>
                        </div>
                    </div>
                    <div class="apple-card p-6">
                        <h4 class="font-bold text-lg mb-2 flex items-center space-x-2"><i data-lucide="zap" class="w-5 h-5 text-yellow-500"></i><span>${t.powerMonitor}</span></h4>
                        <p class="text-xs text-gray-400 mb-4">${t.powerDesc}</p>
                        <div class="space-y-4 text-xs">
                            <div class="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100"><span class="text-gray-500">${t.currentLoad}</span><span id="currentVal" class="font-bold text-lg text-emerald-500">1320 mA</span></div>
                            <div>
                                <div class="flex justify-between mb-1"><span class="text-gray-400 font-medium">${t.loadPercentLabel}</span><span id="loadPercentVal" class="font-bold">66%</span></div>
                                <div class="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden"><div id="loadProgressBar" class="h-full bg-emerald-500 transition-all duration-300" style="width: 66%"></div></div>
                            </div>
                            <div class="flex items-center space-x-2 pt-2"><div id="protectionIndicator" class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div><span id="protectionText" class="font-semibold text-emerald-600">${t.statusSafe}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // 初始載入預設模式
    const targetMode = window.simMode || 'speed';
    window.setSimMode(targetMode);
};

/* --- 核心模式與頁籤調度鎖 --- */
window.setSimMode = function(mode) {
    window.simMode = mode;
    const langKey = document.getElementById('langSelect')?.value || window.currentLang || 'zh-TW';
    const t = (window.translations && window.translations[langKey]) || window.translations?.zh || {};

    // 切換時終止運行中的遊戲
    if (window.gameInterval) {
        clearInterval(window.gameInterval);
        window.gameInterval = null;
        const startBtn = document.getElementById('startGameBtn');
        if (startBtn) startBtn.textContent = t.startBtnText || '遊戲開始';
    }

    // 刷新頁籤 UI
    ['speed', 'color', 'home'].forEach(m => {
        const btn = document.getElementById(`tab-${m}`);
        if (btn) {
            if (m === mode) {
                btn.className = "flex-1 py-2 text-xs font-semibold rounded-full bg-white text-black shadow transition-all font-bold cursor-pointer";
            } else {
                btn.className = "flex-1 py-2 text-xs font-semibold rounded-full text-gray-500 hover:text-gray-900 transition-all cursor-pointer";
            }
        }
    });

    const homePanel = document.getElementById('homeControlPanel');
    const gameDashboard = document.getElementById('gameDashboard');
    const startBtn = document.getElementById('startGameBtn');

    if (mode === 'home') {
        if (homePanel) homePanel.classList.remove('hidden');
        if (gameDashboard) gameDashboard.classList.add('hidden');
        if (startBtn) startBtn.classList.add('hidden');
        window.initAmbientWall();
        window.updateHomeColor();
    } else {
        if (homePanel) homePanel.classList.add('hidden');
        if (gameDashboard) gameDashboard.classList.remove('hidden');
        if (startBtn) startBtn.classList.remove('hidden');
        window.initSimWall();
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
};

/* --- 3x3 硬體遊戲介面生成 --- */
window.initSimWall = function() {
    const wall = document.getElementById('simulatedWall');
    if(!wall) return;
    wall.innerHTML = '';
    for(let i=0; i<9; i++) {
        wall.innerHTML += `
            <div id="pad-${i}" onclick="window.hitPad(${i})" class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-[1.5rem] octagon cursor-pointer flex items-center justify-center transition-all duration-100 shadow-inner hover:bg-gray-400 select-none">
                <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-xl pentagon shadow-sm"></div>
            </div>
        `;
    }
    window.updatePowerCalculation();
};

/* --- 3x3 居家模式介面生成 --- */
window.initAmbientWall = function() {
    const wall = document.getElementById('simulatedWall');
    if(!wall) return;
    wall.innerHTML = '';
    for(let i=0; i<9; i++) {
        wall.innerHTML += `
            <div id="pad-${i}" class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-[1.5rem] octagon flex items-center justify-center transition-all duration-300 shadow-md">
                <div class="w-10 h-10 bg-gray-200 rounded-xl pentagon shadow-sm transition-all duration-300" id="inner-pad-${i}"></div>
            </div>
        `;
    }
}; 

/* --- 居家調光與發光渲染邏輯 --- */
window.updateHomeColor = function() {
    const hue = document.getElementById('hueRange')?.value || 180;
    const sat = document.getElementById('satRange')?.value || 85;
    const bri = document.getElementById('briRange')?.value || 60;
    const temp = document.getElementById('tempRange')?.value || 4500;

    if (document.getElementById('hueText')) document.getElementById('hueText').textContent = `${hue}°`;
    if (document.getElementById('satText')) document.getElementById('satText').textContent = `${sat}%`;
    if (document.getElementById('briText')) document.getElementById('briText').textContent = `${bri}%`;
    if (document.getElementById('tempText')) document.getElementById('tempText').textContent = `${temp}K`;

    const hslColor = `hsl(${hue}, ${sat}%, ${Math.round(bri * 0.5)}%)`;
    const glowShadow = `0 0 20px hsla(${hue}, ${sat}%, 50%, ${bri / 100})`;

    for (let i = 0; i < 9; i++) {
        const innerPad = document.getElementById(`inner-pad-${i}`);
        if (innerPad) {
            innerPad.style.backgroundColor = hslColor;
            innerPad.style.boxShadow = bri > 5 ? glowShadow : 'none';
        }
    }
    window.updatePowerCalculation();
};

/* --- 動態電網負載計算與警報系統 --- */
window.updatePowerCalculation = function() {
    let totalCurrent = 180; // ESP32 系統基礎待機電流 (mA)

    if (window.simMode === 'home') {
        const bri = parseInt(document.getElementById('briRange')?.value || 60);
        totalCurrent += Math.round(9 * 140 * (bri / 100)); // 9 個模組的全彩負載
    } else {
        totalCurrent += 180; // 遊戲模式下單點觸發電流
    }

    const maxCurrent = 2000;
    const loadPercent = Math.min(100, Math.round((totalCurrent / maxCurrent) * 100));

    const currentVal = document.getElementById('currentVal');
    const loadPercentVal = document.getElementById('loadPercentVal');
    const loadProgressBar = document.getElementById('loadProgressBar');
    const protectionIndicator = document.getElementById('protectionIndicator');
    const protectionText = document.getElementById('protectionText');

    const langKey = document.getElementById('langSelect')?.value || window.currentLang || 'zh-TW';
    const t = (window.translations && window.translations[langKey]) || window.translations?.zh || {};

    if (currentVal) currentVal.textContent = `${totalCurrent} mA`;
    if (loadPercentVal) loadPercentVal.textContent = `${loadPercent}%`;
    if (loadProgressBar) {
        loadProgressBar.style.width = `${loadPercent}%`;
        if (loadPercent > 85) {
            loadProgressBar.className = "h-full bg-red-500 transition-all duration-300";
        } else {
            loadProgressBar.className = "h-full bg-emerald-500 transition-all duration-300";
        }
    }

    if (protectionIndicator && protectionText) {
        if (loadPercent > 85) {
            protectionIndicator.className = "w-2.5 h-2.5 rounded-full bg-red-500";
            protectionText.className = "font-semibold text-red-600";
            protectionText.textContent = t.statusLimit || '電網保護中';
        } else {
            protectionIndicator.className = "w-2.5 h-2.5 rounded-full bg-emerald-500";
            protectionText.className = "font-semibold text-emerald-600";
            protectionText.textContent = t.statusSafe || '安全工作範圍';
        }
    }
};

/* --- 音效與 Web Audio API 引擎 --- */
window.audioCtx = null;
window.gameInterval = null;
window.gameScore = 0;
window.gameTimeLeft = 30;
window.targetId = null;
window.targetColor = 'blue';
window.speedTimer = 0;
window.reactionSum = 0;
window.totalHits = 0;

window.playSound = function(type) {
    if (!window.audioCtx) {
        window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const now = window.audioCtx.currentTime;
    if (window.audioCtx.state === 'suspended') {
        window.audioCtx.resume();
    }
    const osc = window.audioCtx.createOscillator();
    const gain = window.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(window.audioCtx.destination);

    if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.15);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'hit') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    } else if (type === 'fail') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(80, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
};

/* --- 遊戲開始 / 停止控制 --- */
window.toggleGame = function() {
    const startBtn = document.getElementById('startGameBtn');
    const langKey = document.getElementById('langSelect')?.value || window.currentLang || 'zh-TW';
    const t = (window.translations && window.translations[langKey]) || window.translations?.zh || {};

    if (window.gameInterval) {
        clearInterval(window.gameInterval);
        window.gameInterval = null;
        if (startBtn) startBtn.textContent = t.startBtnText || '遊戲開始';
        window.initSimWall();
    } else {
        window.gameScore = 0;
        window.gameTimeLeft = 30;
        window.totalHits = 0;
        window.reactionSum = 0;
        if (document.getElementById('scoreVal')) document.getElementById('scoreVal').textContent = '0';
        if (document.getElementById('timeVal')) document.getElementById('timeVal').textContent = '30s';
        if (document.getElementById('reactVal')) document.getElementById('reactVal').textContent = `0${t.ms || 'ms'}`;
        if (startBtn) startBtn.textContent = t.stopBtnText || '停止測試';
        
        window.playSound('success');
        window.nextTarget();
        
        window.gameInterval = setInterval(() => {
            window.gameTimeLeft--;
            if (document.getElementById('timeVal')) document.getElementById('timeVal').textContent = `${window.gameTimeLeft}s`;
            if (window.gameTimeLeft <= 0) {
                clearInterval(window.gameInterval);
                window.gameInterval = null;
                if (startBtn) startBtn.textContent = t.startBtnText || '遊戲開始';
                window.alertGameResult();
            }
        }, 1000);
    }
};

/* --- 隨機產生目標 --- */
window.nextTarget = function() {
    if (window.targetId !== null) {
        const prevPad = document.getElementById(`pad-${window.targetId}`);
        if(prevPad) prevPad.style.backgroundColor = '#d1d5db';
    }
    window.targetId = Math.floor(Math.random() * 9);
    const nextPad = document.getElementById(`pad-${window.targetId}`);
    
    if (window.simMode === 'speed') {
        window.targetColor = 'blue';
        if(nextPad) nextPad.style.backgroundColor = '#38bdf8';
    } else if (window.simMode === 'color') {
        window.targetColor = Math.random() < 0.7 ? 'blue' : 'red';
        if(nextPad) nextPad.style.backgroundColor = window.targetColor === 'blue' ? '#38bdf8' : '#ef4444';
    }
    window.speedTimer = performance.now();
    window.updatePowerCalculation();
};

/* --- 觸碰打擊判定 --- */
window.hitPad = function(id) {
    if (!window.gameInterval) return;
    if (id !== window.targetId) return;
    const duration = Math.round(performance.now() - window.speedTimer);
    const langKey = document.getElementById('langSelect')?.value || window.currentLang || 'zh-TW';
    const t = (window.translations && window.translations[langKey]) || window.translations?.zh || {};

    if (window.simMode === 'speed') {
        window.gameScore += 10;
        window.totalHits++;
        window.reactionSum += duration;
        window.playSound('hit');
        if (document.getElementById('scoreVal')) document.getElementById('scoreVal').textContent = window.gameScore;
        if (document.getElementById('reactVal')) document.getElementById('reactVal').textContent = `${Math.round(window.reactionSum / window.totalHits)}${t.ms || 'ms'}`;
        window.nextTarget();
    } else if (window.simMode === 'color') {
        if (window.targetColor === 'blue') {
            window.gameScore += 15;
            window.totalHits++;
            window.reactionSum += duration;
            window.playSound('hit');
        } else {
            window.gameScore = Math.max(0, window.gameScore - 20);
            window.playSound('fail');
        }
        if (document.getElementById('scoreVal')) document.getElementById('scoreVal').textContent = window.gameScore;
        if (window.totalHits > 0 && document.getElementById('reactVal')) {
            document.getElementById('reactVal').textContent = `${Math.round(window.reactionSum / window.totalHits)}${t.ms || 'ms'}`;
        }
        window.nextTarget();
    }
};

/* --- 結算彈窗 --- */
window.alertGameResult = function() {
    window.playSound('success');
    const langKey = document.getElementById('langSelect')?.value || window.currentLang || 'zh-TW';
    const t = (window.translations && window.translations[langKey]) || window.translations?.zh || {};
    const avg = window.totalHits > 0 ? Math.round(window.reactionSum / window.totalHits) : 0;
    
    alert(`${t.alertEnd || '測試結束！'}\n${t.alertScore || '得分：'}${window.gameScore}\n${t.alertAvgReact || '平均反應：'}${avg} ${t.ms || 'ms'}\n${t.alertHits || '命中次數：'}${window.totalHits}`);
    window.initSimWall();
};