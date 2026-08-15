// 🌍 全球 190+ 完整國家清單 (純英文標準名 + FlagCDN 圖示)
const COUNTRY_LIST = [
    { code: 'tw', name: 'Taiwan' }, { code: 'us', name: 'United States' }, { code: 'jp', name: 'Japan' },
    { code: 'kr', name: 'South Korea' }, { code: 'de', name: 'Germany' }, { code: 'gb', name: 'United Kingdom' },
    { code: 'fr', name: 'France' }, { code: 'ca', name: 'Canada' }, { code: 'au', name: 'Australia' },
    { code: 'cn', name: 'China' }, { code: 'hk', name: 'Hong Kong' }, { code: 'sg', name: 'Singapore' },
    { code: 'af', name: 'Afghanistan' }, { code: 'al', name: 'Albania' }, { code: 'dz', name: 'Algeria' },
    { code: 'ad', name: 'Andorra' }, { code: 'ao', name: 'Angola' }, { code: 'ar', name: 'Argentina' },
    { code: 'am', name: 'Armenia' }, { code: 'at', name: 'Austria' }, { code: 'az', name: 'Azerbaijan' },
    { code: 'bs', name: 'Bahamas' }, { code: 'bh', name: 'Bahrain' }, { code: 'bd', name: 'Bangladesh' },
    { code: 'bb', name: 'Barbados' }, { code: 'by', name: 'Belarus' }, { code: 'be', name: 'Belgium' },
    { code: 'bz', name: 'Belize' }, { code: 'bj', name: 'Benin' }, { code: 'bt', name: 'Bhutan' },
    { code: 'bo', name: 'Bolivia' }, { code: 'ba', name: 'Bosnia and Herzegovina' }, { code: 'bw', name: 'Botswana' },
    { code: 'br', name: 'Brazil' }, { code: 'bn', name: 'Brunei' }, { code: 'bg', name: 'Bulgaria' },
    { code: 'kh', name: 'Cambodia' }, { code: 'cm', name: 'Cameroon' }, { code: 'cl', name: 'Chile' },
    { code: 'co', name: 'Colombia' }, { code: 'cr', name: 'Costa Rica' }, { code: 'hr', name: 'Croatia' },
    { code: 'cu', name: 'Cuba' }, { code: 'cy', name: 'Cyprus' }, { code: 'cz', name: 'Czechia' },
    { code: 'dk', name: 'Denmark' }, { code: 'do', name: 'Dominican Republic' }, { code: 'ec', name: 'Ecuador' },
    { code: 'eg', name: 'Egypt' }, { code: 'ee', name: 'Estonia' }, { code: 'et', name: 'Ethiopia' },
    { code: 'fi', name: 'Finland' }, { code: 'ge', name: 'Georgia' }, { code: 'gh', name: 'Ghana' },
    { code: 'gr', name: 'Greece' }, { code: 'gt', name: 'Guatemala' }, { code: 'hu', name: 'Hungary' },
    { code: 'is', name: 'Iceland' }, { code: 'in', name: 'India' }, { code: 'id', name: 'Indonesia' },
    { code: 'ir', name: 'Iran' }, { code: 'iq', name: 'Iraq' }, { code: 'ie', name: 'Ireland' },
    { code: 'il', name: 'Israel' }, { code: 'it', name: 'Italy' }, { code: 'jm', name: 'Jamaica' },
    { code: 'jo', name: 'Jordan' }, { code: 'kz', name: 'Kazakhstan' }, { code: 'ke', name: 'Kenya' },
    { code: 'kw', name: 'Kuwait' }, { code: 'lv', name: 'Latvia' }, { code: 'lb', name: 'Lebanon' },
    { code: 'lt', name: 'Lithuania' }, { code: 'lu', name: 'Luxembourg' }, { code: 'mo', name: 'Macao' },
    { code: 'my', name: 'Malaysia' }, { code: 'mv', name: 'Maldives' }, { code: 'mt', name: 'Malta' },
    { code: 'mx', name: 'Mexico' }, { code: 'mc', name: 'Monaco' }, { code: 'mn', name: 'Mongolia' },
    { code: 'ma', name: 'Morocco' }, { code: 'mm', name: 'Myanmar' }, { code: 'np', name: 'Nepal' },
    { code: 'nl', name: 'Netherlands' }, { code: 'nz', name: 'New Zealand' }, { code: 'ng', name: 'Nigeria' },
    { code: 'no', name: 'Norway' }, { code: 'om', name: 'Oman' }, { code: 'pk', name: 'Pakistan' },
    { code: 'pa', name: 'Panama' }, { code: 'py', name: 'Paraguay' }, { code: 'pe', name: 'Peru' },
    { code: 'ph', name: 'Philippines' }, { code: 'pl', name: 'Poland' }, { code: 'pt', name: 'Portugal' },
    { code: 'qa', name: 'Qatar' }, { code: 'ro', name: 'Romania' }, { code: 'ru', name: 'Russia' },
    { code: 'sa', name: 'Saudi Arabia' }, { code: 'rs', name: 'Serbia' }, { code: 'sk', name: 'Slovakia' },
    { code: 'si', name: 'Slovenia' }, { code: 'za', name: 'South Africa' }, { code: 'es', name: 'Spain' },
    { code: 'lk', name: 'Sri Lanka' }, { code: 'se', name: 'Sweden' }, { code: 'ch', name: 'Switzerland' },
    { code: 'th', name: 'Thailand' }, { code: 'tr', name: 'Turkey' }, { code: 'ua', name: 'Ukraine' },
    { code: 'ae', name: 'United Arab Emirates' }, { code: 'uy', name: 'Uruguay' }, { code: 'uz', name: 'Uzbekistan' },
    { code: 've', name: 'Venezuela' }, { code: 'vn', name: 'Vietnam' }, { code: 'zw', name: 'Zimbabwe' },
    { code: 'un', name: 'Other (Global)' }
];

// 全域狀態變數
window.currentAvgReact = 0;
window.audioCtx = null;
window.gameInterval = null; 
window.gameScore = 0; 
window.gameTimeLeft = 10;
window.speedTimer = 0;
window.reactionSum = 0; 
window.totalHits = 0;

// 光速/色彩干擾變數
window.targetBlueId = null;
window.targetRedId = null;
window.autoSwitchTimer = null;

// 🎯 光影追獵者變數
window.huntStep = 1;
window.huntBoxes = { red: null, orange: null, yellow: null };
window.prevHuntBoxes = { red: null, orange: null, yellow: null };

// 居家彩虹模式動態變數
window.rainbowInterval = null;
window.currentRainbowHue = 0;
window.isRainbowMode = false;

window.renderSimulator = function(app, t) {
    t = t || {};

    // 100% 優先讀取字典檔，字典檔有定義就使用字典檔內容
    const txt = {
        simTitle: t.simTitle || '智慧模組反應牆模擬器',
        simDesc: t.simDesc || '體驗 10 秒極限反應訓練與智慧居家情境切換',
        tabSpeed: t.tabSpeed || '光速反應',
        tabColor: t.tabColor || '紅藍辨識',
        tabHunt: t.tabHunt || '光影追獵',
        tabHome: t.tabHome || '居家模式',
        scoreLabel: t.scoreLabel || '累計得分',
        timeLabel: t.timeLabel || '剩餘時間',
        reactLabel: t.reactLabel || '平均反應',
        startBtnText: t.startBtnText || '開始 10 秒極限挑戰',
        stopBtnText: t.stopBtnText || '停止測試',
        leaderboardTitle: t.leaderboardTitle || '全球 TOP 10 英雄榜',
        refresh: t.refresh || '刷新',
        loading: t.loading || '載入排行榜中...',
        noRecords: t.noRecords || '尚無紀錄，快來搶下第一！',
        scoreUnit: t.scoreUnit || '分',
        homeTitle: t.homeTitle || '居家氛圍燈光調節',
        homeHue: t.homeHue || '色相 (色彩)',
        homeSat: t.homeSat || '飽和度 (鮮豔)',
        homeBri: t.homeBri || '亮度 (發光強度)',
        homeTemp: t.homeTemp || '色溫模式 (0=HSV)',
        homeRainbow: t.homeRainbow || '彩虹漸變流光 (30ms)',
        powerMonitor: t.powerMonitor || '電網負載監控',
        currentLoad: t.currentLoad || '當前電流負載',
        loadPercentLabel: t.loadPercentLabel || '負載率',
        statusSafe: t.statusSafe || '安全工作範圍',
        statusLimit: t.statusLimit || '電網保護中',
        modalEnd: t.modalEnd || '10 秒極限挑戰結束！',
        modalFinalScore: t.modalFinalScore || '最終得分',
        modalAvgReact: t.modalAvgReact || '平均反應',
        modalHits: t.modalHits || '命中數',
        modalNamePlaceholder: t.modalNamePlaceholder || '輸入暱稱 / 團隊名 (最多 24 字)',
        modalRetryBtn: t.modalRetryBtn || '再練一次',
        modalSubmitBtn: t.modalSubmitBtn || '登記排行',
        modalSaving: t.modalSaving || '儲存中...'
    };

    app.innerHTML = `
        <section class="max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-16">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">${txt.simTitle}</h2>
                <p class="text-gray-500 mt-2 text-sm">${txt.simDesc}</p>
            </div>
            
            <!-- 4 大模式切換頁籤 (直接由字典檔控制名稱) -->
            <div class="flex justify-center bg-gray-200/80 p-1 rounded-full mb-8 max-w-md mx-auto">
                <button onclick="window.setSimMode('speed')" id="tab-speed" class="flex-1 py-1.5 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${txt.tabSpeed}</button>
                <button onclick="window.setSimMode('color')" id="tab-color" class="flex-1 py-1.5 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${txt.tabColor}</button>
                <button onclick="window.setSimMode('hunt')" id="tab-hunt" class="flex-1 py-1.5 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${txt.tabHunt}</button>
                <button onclick="window.setSimMode('home')" id="tab-home" class="flex-1 py-1.5 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${txt.tabHome}</button>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
                <!-- 左側：3x3 牆面 (鎖定 1:1 正比例) -->
                <div class="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
                    <div class="w-full max-w-[340px] aspect-square bg-gray-50/90 rounded-3xl border border-gray-200/80 p-4 md:p-5 flex items-center justify-center">
                        <div id="simulatedWall" class="grid grid-cols-3 gap-3.5 md:gap-4 w-full h-full items-center justify-items-center"></div>
                    </div>
                    
                    <div id="gameDashboard" class="mt-6 w-full border-t border-gray-100 pt-5 grid grid-cols-3 gap-2 text-center text-xs">
                        <div><p class="text-gray-400 font-medium">${txt.scoreLabel}</p><p id="scoreVal" class="text-2xl md:text-3xl font-extrabold text-indigo-600 mt-0.5">0</p></div>
                        <div><p class="text-gray-400 font-medium">${txt.timeLabel}</p><p id="timeVal" class="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">10s</p></div>
                        <div><p class="text-gray-400 font-medium">${txt.reactLabel}</p><p id="reactVal" class="text-2xl md:text-3xl font-extrabold text-emerald-600 mt-0.5">0ms</p></div>
                    </div>
                    
                    <button id="startGameBtn" onclick="window.toggleGame()" class="mt-6 w-full py-3.5 rounded-full font-bold apple-btn-primary shadow-md cursor-pointer transition-all active:scale-[0.98]">
                        ${txt.startBtnText}
                    </button>
                </div>
                
                <!-- 右側：居家控制面板、排行榜與電網負載 -->
                <div class="lg:col-span-5 space-y-5">
                    
                    <!-- 🏠 5 大居家燈光參數調節面板 -->
                    <div id="homeControlPanel" class="apple-card p-5 hidden">
                        <div class="flex items-center justify-between mb-3.5">
                            <h4 class="font-bold text-sm flex items-center space-x-2 text-gray-900">
                                <i data-lucide="home" class="w-4 h-4 text-indigo-500"></i>
                                <span>${txt.homeTitle}</span>
                            </h4>
                            <div class="flex items-center space-x-2">
                                <span class="text-[11px] font-semibold text-gray-600">${txt.homeRainbow}</span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" id="rainbowToggle" onchange="window.toggleRainbowMode(this.checked)" class="sr-only peer">
                                    <div class="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3.5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>
                        </div>

                        <div class="space-y-3.5 text-xs">
                            <div id="hueControlGroup">
                                <div class="flex justify-between mb-1">
                                    <span class="text-gray-500 font-medium">${txt.homeHue} (0-255)</span>
                                    <span id="hueText" class="font-bold text-indigo-600">128</span>
                                </div>
                                <input type="range" id="hueRange" min="0" max="255" value="128" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                            </div>

                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-gray-500 font-medium">${txt.homeSat} (0-255)</span>
                                    <span id="satText" class="font-bold text-indigo-600">220</span>
                                </div>
                                <input type="range" id="satRange" min="0" max="255" value="220" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                            </div>

                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-gray-500 font-medium">${txt.homeBri} (0-255)</span>
                                    <span id="briText" class="font-bold text-indigo-600">160</span>
                                </div>
                                <input type="range" id="briRange" min="0" max="255" value="160" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                            </div>

                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-gray-500 font-medium">${txt.homeTemp}</span>
                                    <span id="tempText" class="font-bold text-amber-600">0 (HSV 彩色)</span>
                                </div>
                                <input type="range" id="tempRange" min="0" max="255" value="0" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                            </div>
                        </div>
                    </div>

                    <!-- 🏆 排行榜卡片 -->
                    <div class="apple-card p-5" id="leaderboardCard">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center space-x-2">
                                <i data-lucide="trophy" class="w-4 h-4 text-amber-500"></i>
                                <h4 class="font-bold text-sm text-gray-900">
                                    <span>${txt.leaderboardTitle}</span>
                                </h4>
                            </div>
                            <button onclick="window.loadLeaderboard()" class="text-[11px] text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                                <i data-lucide="refresh-cw" class="w-3 h-3 mr-1"></i> ${txt.refresh}
                            </button>
                        </div>
                        <div class="divide-y divide-gray-50 text-xs overflow-hidden" id="leaderboardList">
                            <div class="py-4 text-center text-gray-400 text-xs">${txt.loading}</div>
                        </div>
                    </div>

                    <!-- ⚡ 電網安全監視器 -->
                    <div class="apple-card p-5">
                        <div class="flex justify-between items-center mb-2">
                            <h4 class="font-bold text-sm flex items-center space-x-1.5"><i data-lucide="zap" class="w-4 h-4 text-amber-500"></i><span>${txt.powerMonitor}</span></h4>
                            <span id="currentVal" class="font-bold text-xs text-emerald-500">360 mA</span>
                        </div>
                        <div class="space-y-2 text-xs">
                            <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"><div id="loadProgressBar" class="h-full bg-emerald-500 transition-all duration-300" style="width: 18%"></div></div>
                            <div class="flex justify-between items-center pt-1 text-[11px]">
                                <span class="text-gray-400">${txt.loadPercentLabel} <span id="loadPercentVal" class="font-semibold text-gray-700">18%</span></span>
                                <div class="flex items-center space-x-1.5"><div id="protectionIndicator" class="w-2 h-2 rounded-full bg-emerald-500"></div><span id="protectionText" class="font-medium text-emerald-600">${txt.statusSafe}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 結算彈窗 Modal -->
            <div id="resultModal" class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                <div class="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full text-center shadow-2xl border border-gray-100">
                    <div class="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3"><i data-lucide="award" class="w-7 h-7 text-amber-500"></i></div>
                    <h3 class="text-xl font-bold text-gray-900 mb-0.5">${txt.modalEnd}</h3>
                    <p id="modalGameModeLabel" class="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">SPEED CHALLENGE</p>
                    
                    <div class="my-3 p-3 bg-gray-50 rounded-2xl">
                        <div class="text-xs text-gray-400 font-semibold mb-0.5">${txt.modalFinalScore}</div>
                        <div id="modalScoreVal" class="text-3xl font-extrabold text-indigo-600 mb-1.5">0</div>
                        <div class="flex justify-around text-xs text-gray-500 pt-1.5 border-t border-gray-200">
                            <div>${txt.modalAvgReact}: <span id="modalReactVal" class="font-bold text-gray-800">0ms</span></div>
                            <div>${txt.modalHits}: <span id="modalHitsVal" class="font-bold text-gray-800">0</span></div>
                        </div>
                    </div>
                    
                    <input type="text" id="playerNameInput" maxlength="24" placeholder="${txt.modalNamePlaceholder}" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs mb-2.5 outline-none focus:border-indigo-600 transition-colors">

                    <!-- 搜尋型國旗選單 -->
                    <div class="relative mb-4 text-left">
                        <button type="button" onclick="window.toggleCountryDropdown(event)" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs bg-white flex items-center justify-between outline-none focus:border-indigo-600">
                            <span id="selectedCountryDisplay" class="flex items-center space-x-2"><img src="https://flagcdn.com/w40/tw.png" class="w-4 h-3 object-cover rounded-sm shadow-xs"><span class="font-medium text-gray-800">Taiwan (TW)</span></span>
                            <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-gray-400"></i>
                        </button>
                        
                        <div id="countryDropdownList" class="hidden absolute left-0 right-0 bottom-full mb-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-2 divide-y divide-gray-50">
                            <div class="pb-2"><input type="text" id="countrySearchInput" oninput="window.filterCountries()" placeholder="🔍 Type country name..." class="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs outline-none focus:border-indigo-600" onclick="event.stopPropagation()"></div>
                            <div class="max-h-44 overflow-y-auto pt-1 divide-y divide-gray-50 custom-scrollbar">
                                ${COUNTRY_LIST.map(c => `<div onclick="window.selectCountry('${c.code}', '${c.name}')" class="country-option flex items-center space-x-2 px-2.5 py-2 hover:bg-indigo-50 rounded-lg cursor-pointer transition-colors text-xs" data-name="${c.name.toLowerCase()}"><img src="https://flagcdn.com/w40/${c.code}.png" class="w-4 h-3 object-cover rounded-sm shadow-xs" onerror="this.src='https://flagcdn.com/w40/un.png'"><span class="text-gray-700">${c.name}</span></div>`).join('')}
                            </div>
                        </div>
                        <input type="hidden" id="selectedCountryCode" value="tw">
                    </div>
                    
                    <div class="flex space-x-2.5">
                        <button onclick="window.closeResultModal()" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50">${txt.modalRetryBtn}</button>
                        <button id="submitScoreBtn" onclick="window.submitLeaderboardScore()" class="flex-1 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 active:scale-95 transition-all">${txt.modalSubmitBtn}</button>
                    </div>
                </div>
            </div>
        </section>
    `;

    window.setSimMode(window.simMode || 'speed');
};

/* --- 國家快速篩選 --- */
window.filterCountries = function() {
    const q = document.getElementById('countrySearchInput').value.toLowerCase().trim();
    document.querySelectorAll('.country-option').forEach(opt => {
        if (opt.getAttribute('data-name').includes(q)) opt.classList.remove('hidden');
        else opt.classList.add('hidden');
    });
};

window.toggleCountryDropdown = function(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById('countryDropdownList');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
        if (!dropdown.classList.contains('hidden')) {
            document.getElementById('countrySearchInput').value = '';
            window.filterCountries();
            setTimeout(() => document.getElementById('countrySearchInput').focus(), 100);
        }
    }
};

window.selectCountry = function(code, name) {
    document.getElementById('selectedCountryCode').value = code;
    document.getElementById('selectedCountryDisplay').innerHTML = `<img src="https://flagcdn.com/w40/${code}.png" class="w-4 h-3 object-cover rounded-sm shadow-xs" onerror="this.src='https://flagcdn.com/w40/un.png'"><span class="font-medium text-gray-800">${name} (${code.toUpperCase()})</span>`;
    document.getElementById('countryDropdownList').classList.add('hidden');
};

document.addEventListener('click', () => {
    const dp = document.getElementById('countryDropdownList');
    if (dp) dp.classList.add('hidden');
});

/* --- 模式切換邏輯 --- */
window.setSimMode = function(mode) {
    window.simMode = mode;

    if (window.gameInterval) {
        clearInterval(window.gameInterval); window.gameInterval = null;
        if (window.autoSwitchTimer) { clearTimeout(window.autoSwitchTimer); window.autoSwitchTimer = null; }
        const startBtn = document.getElementById('startGameBtn');
        const langKey = window.currentLang || 'zh-TW';
        const t = window.translations?.[langKey] || window.translations?.['zh-TW'] || {};
        if (startBtn) startBtn.textContent = t.startBtnText || '開始 10 秒極限挑戰';
    }

    if (mode !== 'home') {
        if (window.rainbowInterval) {
            clearInterval(window.rainbowInterval);
            window.rainbowInterval = null;
        }
    }

    ['speed', 'color', 'hunt', 'home'].forEach(m => {
        const btn = document.getElementById(`tab-${m}`);
        if (btn) btn.className = (m === mode) ? "flex-1 py-1.5 text-xs font-semibold rounded-full bg-white text-black shadow transition-all font-bold cursor-pointer" : "flex-1 py-1.5 text-xs font-semibold rounded-full text-gray-500 hover:text-gray-900 transition-all cursor-pointer";
    });

    const homePanel = document.getElementById('homeControlPanel');
    const gameDashboard = document.getElementById('gameDashboard');
    const startBtn = document.getElementById('startGameBtn');
    const leaderboardCard = document.getElementById('leaderboardCard');

    if (mode === 'home') {
        if (homePanel) homePanel.classList.remove('hidden');
        if (gameDashboard) gameDashboard.classList.add('hidden');
        if (startBtn) startBtn.classList.add('hidden');
        if (leaderboardCard) leaderboardCard.classList.add('hidden');
        window.initAmbientWall();
        window.updateHomeColor();
    } else {
        if (homePanel) homePanel.classList.add('hidden');
        if (gameDashboard) gameDashboard.classList.remove('hidden');
        if (startBtn) startBtn.classList.remove('hidden');
        if (leaderboardCard) leaderboardCard.classList.remove('hidden');
        window.initSimWall();
        window.loadLeaderboard();
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

/* --- 牆面渲染 --- */
window.initSimWall = function() {
    const wall = document.getElementById('simulatedWall');
    if(!wall) return;
    wall.innerHTML = Array.from({length:9}).map((_,i) => `<div id="pad-${i}" onclick="window.hitPad(${i})" class="w-full h-full aspect-square max-w-[80px] max-h-[80px] bg-gray-300 rounded-[1.25rem] octagon cursor-pointer flex items-center justify-center transition-all duration-100 shadow-inner hover:bg-gray-400 select-none active:scale-95 shrink-0"><div class="w-[48%] h-[48%] aspect-square bg-gray-100 rounded-lg pentagon shadow-sm pointer-events-none"></div></div>`).join('');
    window.updatePowerCalculation();
};

window.initAmbientWall = function() {
    const wall = document.getElementById('simulatedWall');
    if(!wall) return;
    wall.innerHTML = Array.from({length:9}).map((_,i) => `<div id="pad-${i}" class="w-full h-full aspect-square max-w-[80px] max-h-[80px] bg-gray-900 rounded-[1.25rem] octagon flex items-center justify-center transition-all duration-300 shadow-md shrink-0"><div class="w-[52%] h-[52%] aspect-square bg-gray-200 rounded-lg pentagon shadow-sm transition-all duration-300 pointer-events-none" id="inner-pad-${i}"></div></div>`).join('');
}; 

/* --- 5 大居家燈光參數調節核心 --- */
window.toggleRainbowMode = function(isOn) {
    window.isRainbowMode = isOn;
    const hueGroup = document.getElementById('hueControlGroup');

    if (isOn) {
        if (hueGroup) hueGroup.classList.add('opacity-40', 'pointer-events-none');
        if (window.rainbowInterval) clearInterval(window.rainbowInterval);

        window.rainbowInterval = setInterval(() => {
            window.currentRainbowHue = (window.currentRainbowHue + 1) % 256;
            window.renderAmbientLights(window.currentRainbowHue, true);
        }, 30);
    } else {
        if (hueGroup) hueGroup.classList.remove('opacity-40', 'pointer-events-none');
        if (window.rainbowInterval) {
            clearInterval(window.rainbowInterval);
            window.rainbowInterval = null;
        }
        window.updateHomeColor();
    }
};

window.updateHomeColor = function() {
    if (window.isRainbowMode) {
        window.renderAmbientLights(window.currentRainbowHue, true);
        return;
    }

    const rawHue = parseInt(document.getElementById('hueRange')?.value || 128);
    const rawSat = parseInt(document.getElementById('satRange')?.value || 220);
    const rawBri = parseInt(document.getElementById('briRange')?.value || 160);
    const rawTemp = parseInt(document.getElementById('tempRange')?.value || 0);

    if (document.getElementById('hueText')) document.getElementById('hueText').textContent = rawHue;
    if (document.getElementById('satText')) document.getElementById('satText').textContent = rawSat;
    if (document.getElementById('briText')) document.getElementById('briText').textContent = rawBri;

    const tempText = document.getElementById('tempText');
    if (tempText) {
        if (rawTemp === 0) {
            tempText.textContent = "0 (HSV 彩色)";
            tempText.className = "font-bold text-indigo-600";
        } else if (rawTemp < 100) {
            tempText.textContent = `${rawTemp} (暖黃光)`;
            tempText.className = "font-bold text-amber-500";
        } else if (rawTemp < 180) {
            tempText.textContent = `${rawTemp} (自然光)`;
            tempText.className = "font-bold text-amber-700";
        } else {
            tempText.textContent = `${rawTemp} (冷白光)`;
            tempText.className = "font-bold text-sky-500";
        }
    }

    window.renderAmbientLights(rawHue, false);
};

window.renderAmbientLights = function(baseHue, isDynamicRainbow) {
    const rawSat = parseInt(document.getElementById('satRange')?.value || 220);
    const rawBri = parseInt(document.getElementById('briRange')?.value || 160);
    const rawTemp = parseInt(document.getElementById('tempRange')?.value || 0);

    const briRatio = rawBri / 255;
    const satRatio = rawSat / 255;

    for (let i = 0; i < 9; i++) {
        const innerPad = document.getElementById(`inner-pad-${i}`);
        if (!innerPad) continue;

        let finalR = 0, finalG = 0, finalB = 0;

        if (rawTemp === 0 || isDynamicRainbow) {
            const hueVal = isDynamicRainbow ? (baseHue + i * 15) % 256 : baseHue;
            const hDegree = (hueVal / 255) * 360;
            const sPercent = satRatio * 100;
            const lPercent = Math.min(50, briRatio * 50);

            innerPad.style.backgroundColor = `hsl(${hDegree}, ${sPercent}%, ${lPercent}%)`;
            innerPad.style.boxShadow = rawBri > 10 ? `0 0 16px hsla(${hDegree}, ${sPercent}%, 50%, ${briRatio * 0.9})` : 'none';
        } else {
            const t = (rawTemp - 1) / 254;

            if (t < 0.5) {
                const subT = t * 2;
                finalR = Math.round(255 * (1 - subT) + 255 * subT);
                finalG = Math.round(170 * (1 - subT) + 245 * subT);
                finalB = Math.round(70 * (1 - subT) + 230 * subT);
            } else {
                const subT = (t - 0.5) * 2;
                finalR = Math.round(255 * (1 - subT) + 200 * subT);
                finalG = Math.round(245 * (1 - subT) + 225 * subT);
                finalB = Math.round(230 * (1 - subT) + 255 * subT);
            }

            finalR = Math.round(finalR * briRatio);
            finalG = Math.round(finalG * briRatio);
            finalB = Math.round(finalB * briRatio);

            innerPad.style.backgroundColor = `rgb(${finalR}, ${finalG}, ${finalB})`;
            innerPad.style.boxShadow = rawBri > 10 ? `0 0 16px rgba(${finalR}, ${finalG}, ${finalB}, 0.8)` : 'none';
        }
    }

    window.updatePowerCalculation();
};

/* --- 電網負載監控 --- */
window.updatePowerCalculation = function() {
    let totalCurrent = 180;

    if (window.simMode === 'home') {
        const rawBri = parseInt(document.getElementById('briRange')?.value || 160);
        totalCurrent += Math.round(9 * 140 * (rawBri / 255)); 
    } else {
        totalCurrent += 180;
    }

    const loadPercent = Math.min(100, Math.round((totalCurrent / 2000) * 100));
    const langKey = window.currentLang || 'zh-TW';
    const t = window.translations?.[langKey] || window.translations?.['zh-TW'] || {};

    if (document.getElementById('currentVal')) document.getElementById('currentVal').textContent = `${totalCurrent} mA`;
    if (document.getElementById('loadPercentVal')) document.getElementById('loadPercentVal').textContent = `${loadPercent}%`;
    
    const bar = document.getElementById('loadProgressBar');
    if (bar) { bar.style.width = `${loadPercent}%`; bar.className = loadPercent > 85 ? "h-full bg-red-500 transition-all duration-300" : "h-full bg-emerald-500 transition-all duration-300"; }

    const pt = document.getElementById('protectionText');
    const pi = document.getElementById('protectionIndicator');
    if (pt && pi) {
        if (loadPercent > 85) {
            pi.className = "w-2.5 h-2.5 rounded-full bg-red-500";
            pt.className = "font-medium text-red-600";
            pt.textContent = t.statusLimit || '電網保護中';
        } else {
            pi.className = "w-2.5 h-2.5 rounded-full bg-emerald-500";
            pt.className = "font-medium text-emerald-600";
            pt.textContent = t.statusSafe || '安全工作範圍';
        }
    }
};

/* --- Web Audio 音效 --- */
window.playSound = function(type) {
    if (!window.audioCtx) window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = window.audioCtx.currentTime;
    if (window.audioCtx.state === 'suspended') window.audioCtx.resume();
    
    const osc = window.audioCtx.createOscillator();
    const gain = window.audioCtx.createGain();
    osc.connect(gain); gain.connect(window.audioCtx.destination);

    if (type === 'success') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(523.25, now); osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.15);
        gain.gain.setValueAtTime(0.15, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    } else if (type === 'step1') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(523.25, now);
        gain.gain.setValueAtTime(0.12, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now); osc.stop(now + 0.08);
    } else if (type === 'step2') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(659.25, now);
        gain.gain.setValueAtTime(0.12, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now); osc.stop(now + 0.08);
    } else if (type === 'step3') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(880, now); osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.12);
        gain.gain.setValueAtTime(0.18, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now); osc.stop(now + 0.25);
    } else if (type === 'hit') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(880, now);
        gain.gain.setValueAtTime(0.1, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now); osc.stop(now + 0.1);
    } else if (type === 'fail') {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, now); osc.frequency.linearRampToValueAtTime(80, now + 0.25);
        gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    }
};

/* --- 10 秒挑戰主流程 --- */
window.toggleGame = function() {
    const startBtn = document.getElementById('startGameBtn');
    const langKey = window.currentLang || 'zh-TW';
    const t = window.translations?.[langKey] || window.translations?.['zh-TW'] || {};

    if (window.gameInterval) {
        clearInterval(window.gameInterval); window.gameInterval = null;
        if (window.autoSwitchTimer) { clearTimeout(window.autoSwitchTimer); window.autoSwitchTimer = null; }
        if (startBtn) startBtn.textContent = t.startBtnText || '開始 10 秒極限挑戰';
        window.initSimWall();
    } else {
        window.gameScore = 0; window.gameTimeLeft = 10; window.totalHits = 0; window.reactionSum = 0; window.currentAvgReact = 0;
        window.prevHuntBoxes = { red: null, orange: null, yellow: null };
        
        if (document.getElementById('scoreVal')) document.getElementById('scoreVal').textContent = '0';
        if (document.getElementById('timeVal')) document.getElementById('timeVal').textContent = '10s';
        if (document.getElementById('reactVal')) document.getElementById('reactVal').textContent = `0${t.ms || 'ms'}`;
        if (startBtn) startBtn.textContent = t.stopBtnText || '停止測試';
        
        window.playSound('success'); 
        window.nextTarget();
        
        window.gameInterval = setInterval(() => {
            window.gameTimeLeft--;
            if (document.getElementById('timeVal')) document.getElementById('timeVal').textContent = `${window.gameTimeLeft}s`;
            if (window.gameTimeLeft <= 0) {
                clearInterval(window.gameInterval); window.gameInterval = null;
                if (window.autoSwitchTimer) { clearTimeout(window.autoSwitchTimer); window.autoSwitchTimer = null; }
                if (startBtn) startBtn.textContent = t.startBtnText || '開始 10 秒極限挑戰';
                window.showResultModal();
            }
        }, 1000);
    }
};

/* --- 隨機出題演算法 --- */
window.nextTarget = function() {
    if (window.autoSwitchTimer) clearTimeout(window.autoSwitchTimer);

    for (let i = 0; i < 9; i++) {
        const p = document.getElementById(`pad-${i}`);
        if (p) p.style.backgroundColor = '#d1d5db';
    }

    const available = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    if (window.simMode === 'speed') {
        const bIdx = Math.floor(Math.random() * available.length);
        window.targetBlueId = available[bIdx];
        window.targetRedId = null;

        const nextPad = document.getElementById(`pad-${window.targetBlueId}`);
        if(nextPad) nextPad.style.backgroundColor = '#38bdf8';

    } else if (window.simMode === 'color') {
        const bIdx = Math.floor(Math.random() * available.length);
        window.targetBlueId = available.splice(bIdx, 1)[0];

        const rIdx = Math.floor(Math.random() * available.length);
        window.targetRedId = available.splice(rIdx, 1)[0];

        const pb = document.getElementById(`pad-${window.targetBlueId}`);
        if(pb) pb.style.backgroundColor = '#38bdf8';
        
        const pr = document.getElementById(`pad-${window.targetRedId}`);
        if(pr) pr.style.backgroundColor = '#ef4444';

        window.autoSwitchTimer = setTimeout(() => {
            if (window.gameInterval) window.nextTarget();
        }, 1500);

    } else if (window.simMode === 'hunt') {
        let r, o, y;
        let attempts = 0;
        do {
            const shuffled = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5);
            r = shuffled[0];
            o = shuffled[1];
            y = shuffled[2];
            attempts++;
        } while (attempts < 50 && (
            r === window.prevHuntBoxes.red ||
            o === window.prevHuntBoxes.orange ||
            y === window.prevHuntBoxes.yellow
        ));

        window.prevHuntBoxes = { red: r, orange: o, yellow: y };
        window.huntBoxes = { red: r, orange: o, yellow: y };
        window.huntStep = 1;

        const pr = document.getElementById(`pad-${r}`);
        const po = document.getElementById(`pad-${o}`);
        const py = document.getElementById(`pad-${y}`);
        if (pr) pr.style.backgroundColor = '#ef4444';
        if (po) po.style.backgroundColor = '#f97316';
        if (py) py.style.backgroundColor = '#eab308';
    }

    window.speedTimer = performance.now();
    window.updatePowerCalculation();
};

/* --- 拍擊判斷 --- */
window.hitPad = function(id) {
    if (!window.gameInterval) return;

    const duration = Math.round(performance.now() - window.speedTimer);
    const langKey = window.currentLang || 'zh-TW';
    const t = window.translations?.[langKey] || window.translations?.['zh-TW'] || {};

    if (window.simMode === 'speed') {
        if (id !== window.targetBlueId) return;
        window.gameScore += 10; 
        window.totalHits++; 
        window.reactionSum += duration; 
        window.playSound('hit');
        window.nextTarget();

    } else if (window.simMode === 'color') {
        if (id !== window.targetBlueId && id !== window.targetRedId) return;
        if (id === window.targetBlueId) {
            window.gameScore += 1; 
            window.totalHits++; 
            window.reactionSum += duration; 
            window.playSound('hit');
            window.nextTarget();
        } else if (id === window.targetRedId) {
            window.gameScore = Math.max(0, window.gameScore - 1); 
            window.playSound('fail');
            window.nextTarget();
        }

    } else if (window.simMode === 'hunt') {
        const { red, orange, yellow } = window.huntBoxes;

        if (window.huntStep === 1) {
            if (id === red) {
                const pr = document.getElementById(`pad-${red}`);
                if (pr) pr.style.backgroundColor = '#d1d5db';
                window.huntStep = 2;
                window.playSound('step1');
            } else {
                window.playSound('fail');
                window.nextTarget();
            }
        } else if (window.huntStep === 2) {
            if (id === orange) {
                const po = document.getElementById(`pad-${orange}`);
                if (po) po.style.backgroundColor = '#d1d5db';
                window.huntStep = 3;
                window.playSound('step2');
            } else {
                window.playSound('fail');
                window.nextTarget();
            }
        } else if (window.huntStep === 3) {
            if (id === yellow) {
                const py = document.getElementById(`pad-${yellow}`);
                if (py) py.style.backgroundColor = '#d1d5db';
                
                window.gameScore += 1;
                window.totalHits++;
                window.reactionSum += duration;
                window.playSound('step3');
                window.nextTarget();
            } else {
                window.playSound('fail');
                window.nextTarget();
            }
        }
    }
    
    if (document.getElementById('scoreVal')) document.getElementById('scoreVal').textContent = window.gameScore;
    if (window.totalHits > 0 && document.getElementById('reactVal')) {
        document.getElementById('reactVal').textContent = `${Math.round(window.reactionSum / window.totalHits)}${t.ms || 'ms'}`;
    }
};

/* --- 結算與排行榜 --- */
window.showResultModal = function() {
    window.playSound('success');
    window.currentAvgReact = window.totalHits > 0 ? Math.round(window.reactionSum / window.totalHits) : 0;
    
    document.getElementById('modalScoreVal').textContent = window.gameScore;
    document.getElementById('modalReactVal').textContent = `${window.currentAvgReact}ms`;
    document.getElementById('modalHitsVal').textContent = window.totalHits;
    
    const modeLabel = document.getElementById('modalGameModeLabel');
    if (modeLabel) {
        if (window.simMode === 'speed') modeLabel.textContent = '⚡ SPEED CHALLENGE 10s';
        else if (window.simMode === 'color') modeLabel.textContent = '🎨 COLOR SHIFT CHALLENGE 10s';
        else if (window.simMode === 'hunt') modeLabel.textContent = '🎯 SHADOW CHASER CHALLENGE 10s';
    }

    document.getElementById('resultModal').classList.remove('hidden');
    window.initSimWall();
};

window.closeResultModal = function() { document.getElementById('resultModal').classList.add('hidden'); };

function parseCountryCode(countryStr) {
    if (!countryStr) return 'un';
    const clean = countryStr.toLowerCase().trim();
    if (clean.length === 2) return clean;
    const match = clean.match(/\b([a-z]{2})\b/);
    return (match && match[1]) ? match[1] : 'un';
}

window.loadLeaderboard = async function() {
    const list = document.getElementById('leaderboardList');
    if (!list) return;
    
    const currentMode = window.simMode || 'speed';
    const langKey = window.currentLang || 'zh-TW';
    const t = window.translations?.[langKey] || window.translations?.['zh-TW'] || {};

    if (!window.LeaderboardService) { list.innerHTML = `<div class="py-3 text-center text-gray-400 text-xs">Service Unavailable</div>`; return; }
    
    list.innerHTML = `<div class="py-3 text-center text-gray-400 text-xs">${t.loading || '載入排行榜中...'}</div>`;
    const topScores = await window.LeaderboardService.getTopScores(currentMode);
    
    if (!topScores || topScores.length === 0) {
        list.innerHTML = `<div class="py-3 text-center text-gray-400 text-xs">${t.noRecords || '尚無紀錄，快來搶下第一！'}</div>`;
        return;
    }

    list.innerHTML = topScores.map((item, index) => {
        const isHardware = item.device && item.device.includes('ESP32');
        return `
            <div class="py-2.5 flex items-center justify-between gap-2">
                <div class="flex items-center space-x-2 min-w-0 flex-1">
                    <span class="w-4 text-center font-bold shrink-0 ${index === 0 ? 'text-amber-500 font-extrabold text-xs' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-700' : 'text-gray-300'}">${index + 1}</span>
                    <img src="https://flagcdn.com/w40/${parseCountryCode(item.country)}.png" class="w-4 h-3 object-cover rounded-xs shadow-xs shrink-0" onerror="this.src='https://flagcdn.com/w40/un.png'">
                    <span class="font-medium text-gray-800 text-xs truncate max-w-[120px] sm:max-w-[150px]" title="${item.name}">${item.name}</span>
                    <span class="text-[9px] px-1 py-0.2 rounded font-semibold shrink-0 ${isHardware ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-500'}">${isHardware ? 'ESP32' : 'Web'}</span>
                </div>
                <div class="text-right shrink-0">
                    <div class="font-bold text-indigo-600 text-xs">${item.score} <span class="text-[9px] font-normal text-gray-400">${t.scoreUnit || '分'}</span></div>
                    <div class="text-[10px] text-gray-400 font-mono">${item.reactTime || item.react_time || 0}ms</div>
                </div>
            </div>
        `;
    }).join('');
};

window.submitLeaderboardScore = async function() {
    const name = document.getElementById('playerNameInput')?.value;
    const countryCode = document.getElementById('selectedCountryCode')?.value || 'tw';
    const submitBtn = document.getElementById('submitScoreBtn');
    const currentMode = window.simMode || 'speed';
    const langKey = window.currentLang || 'zh-TW';
    const t = window.translations?.[langKey] || window.translations?.['zh-TW'] || {};

    if (submitBtn) { submitBtn.innerText = t.modalSaving || '儲存中...'; submitBtn.disabled = true; }

    await window.LeaderboardService.submitScore(name, countryCode.toUpperCase(), window.gameScore, window.currentAvgReact, currentMode);
    
    if (submitBtn) { submitBtn.innerText = t.modalSubmitBtn || '登記排行'; submitBtn.disabled = false; }
    document.getElementById('playerNameInput').value = '';
    window.closeResultModal();
    setTimeout(() => { window.loadLeaderboard(); }, 1500);
};