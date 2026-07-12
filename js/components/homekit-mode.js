/**
 * GlowHit 居家模式 (Home Mode) 智慧調光與控制中樞
 * 嚴格對齊：開啟色溫模式時，顯示色溫並隱藏 HSV；關閉色溫模式時，切換回 HSV 彩光。
 */
(function() {
    
    // 初始化居家模式控制面板與動態節點注入
    window.initAmbientWall = function() {
        const panel = document.getElementById('homeControlPanel');
        if (!panel) return;
        
        const t = window.translations[window.currentLang] || window.translations.zh;
        
        // 動態注入具備條件式切換的智慧控制硬體介面
        panel.innerHTML = `
            <div class="space-y-5 bg-gray-50 p-5 md:p-6 rounded-2xl border border-gray-100">
                <h4 class="font-bold text-gray-900 text-sm md:text-base flex items-center space-x-2">
                    <i data-lucide="home" class="w-5 h-5 text-indigo-500"></i>
                    <span>${t.homeTitle || '居家模式 聯動操控'}</span>
                </h4>
                
                <div class="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div class="flex flex-col pr-2">
                        <span class="text-sm font-semibold text-gray-800">色溫模式</span>
                        <span class="text-xs text-gray-400">啟用冷暖色溫調節，自動隱藏彩光 (HSV)</span>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer select-none">
                        <input type="checkbox" id="toggleColorTempMode" class="sr-only peer" onchange="window.handleHomeModeStyleChange()">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                </div>

                <div id="hsvControlsGroup" class="space-y-4 transition-all duration-300">
                    <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                            <span>${t.homeHue || '彩光色彩 (Hue)'}</span>
                            <span id="hueVal" class="font-mono text-gray-700">180°</span>
                        </div>
                        <input type="range" id="homeHueSlider" min="0" max="360" value="180" class="w-full h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500 rounded-lg appearance-none cursor-pointer" oninput="window.updateHomeColor()">
                    </div>

                    <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                            <span>${t.homeSat || '色彩飽和度 (Saturation)'}</span>
                            <span id="satVal" class="font-mono text-gray-700">100%</span>
                        </div>
                        <input type="range" id="homeSatSlider" min="0" max="100" value="100" class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                    </div>
                </div>

                <div id="colorTempControlsGroup" class="space-y-4 transition-all duration-300 hidden">
                    <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                            <span>${t.homeTemp || '模擬色溫 (Color Temp)'}</span>
                            <span id="tempVal" class="font-mono text-gray-700">4000K</span>
                        </div>
                        <input type="range" id="homeTempSlider" min="2000" max="6500" value="4000" class="w-full h-1.5 bg-gradient-to-r from-orange-300 via-amber-100 to-blue-200 rounded-lg appearance-none cursor-pointer" oninput="window.updateHomeColor()">
                    </div>
                </div>

                <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div class="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                        <span>${t.homeBri || '智慧亮度 (Brightness)'}</span>
                        <span id="briVal" class="font-mono text-gray-700">80%</span>
                    </div>
                    <input type="range" id="homeBriSlider" min="0" max="100" value="80" class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                </div>
            </div>
        `;
        
        lucide.createIcons();
        // 執行初次渲染
        window.updateHomeColor();
    };

    // 處理色溫模式開關的顯示/隱藏切換機制
    window.handleHomeModeStyleChange = function() {
        const isColorTempMode = document.getElementById('toggleColorTempMode').checked;
        const hsvGroup = document.getElementById('hsvControlsGroup');
        const tempGroup = document.getElementById('colorTempControlsGroup');
        
        if (isColorTempMode) {
            // 開啟色溫：隱藏 HSV 群組，顯示色溫群組
            if (hsvGroup) hsvGroup.classList.add('hidden');
            if (tempGroup) tempGroup.classList.remove('hidden');
        } else {
            // 關閉色溫：顯示 HSV 群組，隱藏色溫群組
            if (hsvGroup) hsvGroup.classList.remove('hidden');
            if (tempGroup) tempGroup.classList.add('hidden');
        }
        
        // 變更模式後立即重新演算牆面發光視覺
        window.updateHomeColor();
    };

    // 核心光效演算渲染引擎
    window.updateHomeColor = function() {
        const toggleEl = document.getElementById('toggleColorTempMode');
        if (!toggleEl) return;
        
        const isColorTempMode = toggleEl.checked;
        
        const hue = parseInt(document.getElementById('homeHueSlider').value);
        const sat = parseInt(document.getElementById('homeSatSlider').value);
        const bri = parseInt(document.getElementById('homeBriSlider').value);
        const temp = parseInt(document.getElementById('homeTempSlider').value);
        
        // 輸出即時數值到面板 UI 文本節點上
        if (document.getElementById('hueVal')) document.getElementById('hueVal').innerText = `${hue}°`;
        if (document.getElementById('satVal')) document.getElementById('satVal').innerText = `${sat}%`;
        if (document.getElementById('briVal')) document.getElementById('briVal').innerText = `${bri}%`;
        if (document.getElementById('tempVal')) document.getElementById('tempVal').innerText = `${temp}K`;
        
        let finalBackgroundColor = "";
        let finalGlowShadow = "";
        
        if (isColorTempMode) {
            // 【色溫演算模式】：將 Kelvin 值轉譯為平滑的 RGB 白光光譜
            const rgbValue = convertKelvinToRGB(temp);
            
            // 乘上智慧亮度權重 (Brightness factor)
            const brightnessFactor = bri / 100;
            const r = Math.round(rgbValue.r * brightnessFactor);
            const g = Math.round(rgbValue.g * brightnessFactor);
            const b = Math.round(rgbValue.b * brightnessFactor);
            
            finalBackgroundColor = `rgb(${r}, ${g}, ${b})`;
            finalGlowShadow = `rgba(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b}, 0.65)`;
        } else {
            // 【HSV 彩光演算模式】：利用 HSL 與亮度權重進行網頁燈效渲染
            const hslLightness = Math.round(bri * 0.5); // 將 Value 轉化為 CSS 可靠的 Lightness 區間
            finalBackgroundColor = `hsl(${hue}, ${sat}%, ${hslLightness}%)`;
            finalGlowShadow = `hsla(${hue}, ${sat}%, 50%, 0.65)`;
        }
        
        // 將動態調光光效實時逼真地渲染到反應牆的 3 顆實體模擬模組節點上
        for (let i = 1; i <= 3; i++) {
            const node = document.getElementById(`node-${i}`);
            if (node) {
                // 還原居家靜態美學外觀，去除遊戲打擊狀態的 Class
                node.className = "w-24 h-24 md:w-28 md:h-24 rounded-2xl flex items-center justify-center cursor-default transition-all duration-300 scale-95 border border-transparent shadow-sm";
                
                // 注入 inline 智慧調光色彩
                node.style.backgroundColor = finalBackgroundColor;
                if (bri > 5) {
                    node.style.boxShadow = `0 0 35px ${finalGlowShadow}`;
                } else {
                    node.style.boxShadow = "none"; // 亮度趨近於零時關閉發光倒影
                }
            }
        }
    };

    /**
     * 凱氏色溫 (Kelvin) 轉通用 RGB 的工業級高階線性逼真擬合演算法
     * 範圍優化落在 2000K (極暖黃) 至 6500K (正冷白) 之間
     */
    function convertKelvinToRGB(kelvin) {
        if (kelvin < 4000) {
            // 2000K (255, 135, 30) -> 4000K (255, 215, 140) 的暖色調線性漸變
            const progress = (kelvin - 2000) / 2000;
            return {
                r: 255,
                g: Math.round(135 + (215 - 135) * progress),
                b: Math.round(30 + (140 - 30) * progress)
            };
        } else {
            // 4000K (255, 215, 140) -> 6500K (215, 230, 255) 的冷色調日光漸變
            const progress = (kelvin - 4000) / 2500;
            return {
                r: Math.round(255 - (255 - 215) * progress),
                g: Math.round(215 + (230 - 215) * progress),
                b: Math.round(140 + (255 - 140) * progress)
            };
        }
    }

})();