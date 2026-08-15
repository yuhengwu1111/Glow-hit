// 🌍 全球 190+ 完整國家與地區清單 (純英文標準名 + FlagCDN 圖示)
const COUNTRY_LIST = [
    { code: 'tw', name: 'Taiwan' },
    { code: 'us', name: 'United States' },
    { code: 'jp', name: 'Japan' },
    { code: 'kr', name: 'South Korea' },
    { code: 'de', name: 'Germany' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'fr', name: 'France' },
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' },
    { code: 'cn', name: 'China' },
    { code: 'hk', name: 'Hong Kong' },
    { code: 'sg', name: 'Singapore' },
    { code: 'af', name: 'Afghanistan' },
    { code: 'al', name: 'Albania' },
    { code: 'dz', name: 'Algeria' },
    { code: 'ad', name: 'Andorra' },
    { code: 'ao', name: 'Angola' },
    { code: 'ar', name: 'Argentina' },
    { code: 'am', name: 'Armenia' },
    { code: 'at', name: 'Austria' },
    { code: 'az', name: 'Azerbaijan' },
    { code: 'bs', name: 'Bahamas' },
    { code: 'bh', name: 'Bahrain' },
    { code: 'bd', name: 'Bangladesh' },
    { code: 'bb', name: 'Barbados' },
    { code: 'by', name: 'Belarus' },
    { code: 'be', name: 'Belgium' },
    { code: 'bz', name: 'Belize' },
    { code: 'bj', name: 'Benin' },
    { code: 'bt', name: 'Bhutan' },
    { code: 'bo', name: 'Bolivia' },
    { code: 'ba', name: 'Bosnia and Herzegovina' },
    { code: 'bw', name: 'Botswana' },
    { code: 'br', name: 'Brazil' },
    { code: 'bn', name: 'Brunei' },
    { code: 'bg', name: 'Bulgaria' },
    { code: 'kh', name: 'Cambodia' },
    { code: 'cm', name: 'Cameroon' },
    { code: 'cl', name: 'Chile' },
    { code: 'co', name: 'Colombia' },
    { code: 'cr', name: 'Costa Rica' },
    { code: 'hr', name: 'Croatia' },
    { code: 'cu', name: 'Cuba' },
    { code: 'cy', name: 'Cyprus' },
    { code: 'cz', name: 'Czechia' },
    { code: 'dk', name: 'Denmark' },
    { code: 'do', name: 'Dominican Republic' },
    { code: 'ec', name: 'Ecuador' },
    { code: 'eg', name: 'Egypt' },
    { code: 'ee', name: 'Estonia' },
    { code: 'et', name: 'Ethiopia' },
    { code: 'fi', name: 'Finland' },
    { code: 'ge', name: 'Georgia' },
    { code: 'gh', name: 'Ghana' },
    { code: 'gr', name: 'Greece' },
    { code: 'gt', name: 'Guatemala' },
    { code: 'hu', name: 'Hungary' },
    { code: 'is', name: 'Iceland' },
    { code: 'in', name: 'India' },
    { code: 'id', name: 'Indonesia' },
    { code: 'ir', name: 'Iran' },
    { code: 'iq', name: 'Iraq' },
    { code: 'ie', name: 'Ireland' },
    { code: 'il', name: 'Israel' },
    { code: 'it', name: 'Italy' },
    { code: 'jm', name: 'Jamaica' },
    { code: 'jo', name: 'Jordan' },
    { code: 'kz', name: 'Kazakhstan' },
    { code: 'ke', name: 'Kenya' },
    { code: 'kw', name: 'Kuwait' },
    { code: 'lv', name: 'Latvia' },
    { code: 'lb', name: 'Lebanon' },
    { code: 'lt', name: 'Lithuania' },
    { code: 'lu', name: 'Luxembourg' },
    { code: 'mo', name: 'Macao' },
    { code: 'my', name: 'Malaysia' },
    { code: 'mv', name: 'Maldives' },
    { code: 'mt', name: 'Malta' },
    { code: 'mx', name: 'Mexico' },
    { code: 'mc', name: 'Monaco' },
    { code: 'mn', name: 'Mongolia' },
    { code: 'ma', name: 'Morocco' },
    { code: 'mm', name: 'Myanmar' },
    { code: 'np', name: 'Nepal' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'nz', name: 'New Zealand' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'no', name: 'Norway' },
    { code: 'om', name: 'Oman' },
    { code: 'pk', name: 'Pakistan' },
    { code: 'pa', name: 'Panama' },
    { code: 'py', name: 'Paraguay' },
    { code: 'pe', name: 'Peru' },
    { code: 'ph', name: 'Philippines' },
    { code: 'pl', name: 'Poland' },
    { code: 'pt', name: 'Portugal' },
    { code: 'qa', name: 'Qatar' },
    { code: 'ro', name: 'Romania' },
    { code: 'ru', name: 'Russia' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'rs', name: 'Serbia' },
    { code: 'sk', name: 'Slovakia' },
    { code: 'si', name: 'Slovenia' },
    { code: 'za', name: 'South Africa' },
    { code: 'es', name: 'Spain' },
    { code: 'lk', name: 'Sri Lanka' },
    { code: 'se', name: 'Sweden' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'th', name: 'Thailand' },
    { code: 'tr', name: 'Turkey' },
    { code: 'ua', name: 'Ukraine' },
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'uy', name: 'Uruguay' },
    { code: 'uz', name: 'Uzbekistan' },
    { code: 've', name: 'Venezuela' },
    { code: 'vn', name: 'Vietnam' },
    { code: 'zw', name: 'Zimbabwe' },
    { code: 'un', name: 'Other (Global)' }
];

window.currentAvgReact = 0;

window.renderSimulator = function(app, t) {
    const isEn = (window.currentLang || document.getElementById('langSelect')?.value || '').startsWith('en');
    
    const txt = {
        simTitle: t.simTitle || (isEn ? 'Smart Wall Simulator' : '智慧模組反應牆模擬器'),
        simDesc: t.simDesc || (isEn ? 'Experience 10s agility training & smart home ambient lighting' : '體驗 10 秒極限反應訓練與智慧居家情境切換'),
        tabSpeed: t.tabSpeed || (isEn ? 'Speed (10s)' : '極速 10s'),
        tabColor: t.tabColor || (isEn ? 'Color Shift' : '色彩干擾'),
        tabHome: t.tabHome || (isEn ? 'Ambient Mode' : '居家模式'),
        scoreLabel: t.scoreLabel || (isEn ? 'Score' : '累計得分'),
        timeLabel: t.timeLabel || (isEn ? 'Time Left' : '剩餘時間'),
        reactLabel: t.reactLabel || (isEn ? 'Avg Reaction' : '平均反應'),
        startBtnText: t.startBtnText || (isEn ? 'Start 10s Challenge' : '開始 10 秒極限挑戰'),
        stopBtnText: t.stopBtnText || (isEn ? 'Stop Challenge' : '停止測試'),
        leaderboardTitle: t.leaderboardTitle || (isEn ? 'Global TOP 10' : '全球 TOP 10 英雄榜'),
        refresh: t.refresh || (isEn ? 'Refresh' : '刷新'),
        loading: t.loading || (isEn ? 'Loading ranking...' : '載入排行榜中...'),
        noRecords: t.noRecords || (isEn ? 'No records yet. Be the first!' : '尚無紀錄，快來搶下第一！'),
        scoreUnit: t.scoreUnit || (isEn ? 'pts' : '分'),
        homeTitle: t.homeTitle || (isEn ? 'Ambient Lighting' : '居家氛圍燈光調節'),
        homeHue: t.homeHue || (isEn ? 'Hue' : '色相'),
        homeSat: t.homeSat || (isEn ? 'Saturation' : '飽和度'),
        homeBri: t.homeBri || (isEn ? 'Brightness' : '亮度'),
        homeTemp: t.homeTemp || (isEn ? 'Color Temp' : '色溫'),
        powerMonitor: t.powerMonitor || (isEn ? 'Power Monitor' : '電網負載監控'),
        powerDesc: t.powerDesc || (isEn ? 'Real-time ESP32 & WS2812 system power draw' : '即時估算 ESP32 系統核心與 WS2812 模組功耗'),
        currentLoad: t.currentLoad || (isEn ? 'Current Load' : '當前電流負載'),
        loadPercentLabel: t.loadPercentLabel || (isEn ? 'Load Rate' : '負載率'),
        statusSafe: t.statusSafe || (isEn ? 'Safe Operating Zone' : '安全工作範圍'),
        statusLimit: t.statusLimit || (isEn ? 'Power Protection' : '電網保護中'),
        modalEnd: t.modalEnd || (isEn ? '10s Challenge Completed!' : '10 秒極限挑戰結束！'),
        modalFinalScore: t.modalFinalScore || (isEn ? 'Final Score' : '最終得分'),
        modalAvgReact: t.modalAvgReact || (isEn ? 'Avg Reaction' : '平均反應'),
        modalHits: t.modalHits || (isEn ? 'Total Hits' : '命中數'),
        modalNamePlaceholder: t.modalNamePlaceholder || (isEn ? 'Enter nickname / team (Max 24 chars)' : '輸入暱稱 / 團隊名 (最多 24 字)'),
        modalRetryBtn: t.modalRetryBtn || (isEn ? 'Try Again' : '再練一次'),
        modalSubmitBtn: t.modalSubmitBtn || (isEn ? 'Submit Score' : '登記排行'),
        modalSaving: t.modalSaving || (isEn ? 'Saving...' : '儲存中...')
    };

    app.innerHTML = `
        <section class="max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-16">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">${txt.simTitle}</h2>
                <p class="text-gray-500 mt-2 text-sm">${txt.simDesc}</p>
            </div>
            
            <!-- 模式切換頁籤 (自動連動專屬排行榜) -->
            <div class="flex justify-center bg-gray-200/80 p-1 rounded-full mb-8 max-w-sm mx-auto">
                <button onclick="window.setSimMode('speed')" id="tab-speed" class="flex-1 py-1.5 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${txt.tabSpeed}</button>
                <button onclick="window.setSimMode('color')" id="tab-color" class="flex-1 py-1.5 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${txt.tabColor}</button>
                <button onclick="window.setSimMode('home')" id="tab-home" class="flex-1 py-1.5 text-xs font-semibold rounded-full text-gray-500 transition-all cursor-pointer">${txt.tabHome}</button>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
                
                <!-- 左側：3x3 實體模擬牆面 (佔 7 欄) -->
                <div class="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
                    <div class="w-full max-w-[340px] aspect-square bg-gray-50/90 rounded-3xl border border-gray-200/80 p-4 md:p-5 flex items-center justify-center">
                        <div id="simulatedWall" class="grid grid-cols-3 gap-3.5 md:gap-4 w-full h-full items-center justify-items-center"></div>
                    </div>
                    
                    <!-- 10 秒即時儀表板 -->
                    <div id="gameDashboard" class="mt-6 w-full border-t border-gray-100 pt-5 grid grid-cols-3 gap-2 text-center text-xs">
                        <div>
                            <p class="text-gray-400 font-medium" id="lblScore">${txt.scoreLabel}</p>
                            <p id="scoreVal" class="text-2xl md:text-3xl font-extrabold text-indigo-600 mt-0.5">0</p>
                        </div>
                        <div>
                            <p class="text-gray-400 font-medium" id="lblTime">${txt.timeLabel}</p>
                            <p id="timeVal" class="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">10s</p>
                        </div>
                        <div>
                            <p class="text-gray-400 font-medium" id="lblReact">${txt.reactLabel}</p>
                            <p id="reactVal" class="text-2xl md:text-3xl font-extrabold text-emerald-600 mt-0.5">0ms</p>
                        </div>
                    </div>
                    
                    <button id="startGameBtn" onclick="window.toggleGame()" class="mt-6 w-full py-3.5 rounded-full font-bold apple-btn-primary shadow-md cursor-pointer transition-all active:scale-[0.98]">
                        ${txt.startBtnText}
                    </button>
                </div>
                
                <!-- 右側：當前遊戲專屬排行榜、居家控制與電網安全 (佔 5 欄) -->
                <div class="lg:col-span-5 space-y-5">
                    
                    <!-- 🏆 當前模式專屬 TOP 10 英雄榜 (自動切換) -->
                    <div class="apple-card p-5" id="leaderboardCard">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center space-x-2">
                                <i data-lucide="trophy" class="w-4 h-4 text-amber-500"></i>
                                <h4 class="font-bold text-sm text-gray-900 flex items-center gap-1.5">
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

                    <!-- 居家控制面板 -->
                    <div id="homeControlPanel" class="apple-card p-5 hidden">
                        <h4 class="font-bold text-sm mb-3 flex items-center space-x-2">
                            <i data-lucide="home" class="w-4 h-4 text-indigo-500"></i>
                            <span>${txt.homeTitle}</span>
                        </h4>
                        <div class="space-y-4 text-xs">
                            <div>
                                <div class="flex justify-between mb-1"><span class="text-gray-500 font-medium">${txt.homeHue}</span><span id="hueText" class="font-bold">180°</span></div>
                                <input type="range" id="hueRange" min="0" max="360" value="180" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                            </div>
                            <div>
                                <div class="flex justify-between mb-1"><span class="text-gray-500 font-medium">${txt.homeSat}</span><span id="satText" class="font-bold">85%</span></div>
                                <input type="range" id="satRange" min="0" max="100" value="85" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                            </div>
                            <div>
                                <div class="flex justify-between mb-1"><span class="text-gray-500 font-medium">${txt.homeBri}</span><span id="briText" class="font-bold">60%</span></div>
                                <input type="range" id="briRange" min="0" max="100" value="60" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                            </div>
                            <div>
                                <div class="flex justify-between mb-1"><span class="text-gray-500 font-medium">${txt.homeTemp}</span><span id="tempText" class="font-bold">4500K</span></div>
                                <input type="range" id="tempRange" min="2700" max="6500" step="100" value="4500" class="w-full cursor-pointer accent-indigo-600" oninput="window.updateHomeColor()">
                            </div>
                        </div>
                    </div>

                    <!-- 電網安全監視器 -->
                    <div class="apple-card p-5">
                        <div class="flex justify-between items-center mb-2">
                            <h4 class="font-bold text-sm flex items-center space-x-1.5">
                                <i data-lucide="zap" class="w-4 h-4 text-amber-500"></i>
                                <span>${txt.powerMonitor}</span>
                            </h4>
                            <span id="currentVal" class="font-bold text-xs text-emerald-500">360 mA</span>
                        </div>
                        <div class="space-y-2 text-xs">
                            <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div id="loadProgressBar" class="h-full bg-emerald-500 transition-all duration-300" style="width: 18%"></div>
                            </div>
                            <div class="flex justify-between items-center pt-1 text-[11px]">
                                <span class="text-gray-400">${txt.loadPercentLabel} <span id="loadPercentVal" class="font-semibold text-gray-700">18%</span></span>
                                <div class="flex items-center space-x-1.5">
                                    <div id="protectionIndicator" class="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <span id="protectionText" class="font-medium text-emerald-600">${txt.statusSafe}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- 結算彈窗 Modal -->
            <div id="resultModal" class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                <div class="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full text-center shadow-2xl border border-gray-100">
                    <div class="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i data-lucide="award" class="w-7 h-7 text-amber-500"></i>
                    </div>
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
                    
                    <!-- 暱稱輸入框 -->
                    <input type="text" id="playerNameInput" maxlength="24" placeholder="${txt.modalNamePlaceholder}" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs mb-2.5 outline-none focus:border-indigo-600 transition-colors">

                    <!-- 內建搜尋功能的國旗下拉選單 -->
                    <div class="relative mb-4 text-left">
                        <button type="button" id="countryDropdownBtn" onclick="window.toggleCountryDropdown(event)" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs bg-white flex items-center justify-between outline-none focus:border-indigo-600">
                            <span id="selectedCountryDisplay" class="flex items-center space-x-2">
                                <img src="https://flagcdn.com/w40/tw.png" class="w-4 h-3 object-cover rounded-sm shadow-xs">
                                <span class="font-medium text-gray-800">Taiwan (TW)</span>
                            </span>
                            <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-gray-400"></i>
                        </button>
                        
                        <div id="countryDropdownList" class="hidden absolute left-0 right-0 bottom-full mb-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-2 divide-y divide-gray-50">
                            <!-- 國名即時搜尋輸入框 -->
                            <div class="pb-2">
                                <input type="text" id="countrySearchInput" oninput="window.filterCountries()" placeholder="🔍 Type country name..." class="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs outline-none focus:border-indigo-600" onclick="event.stopPropagation()">
                            </div>
                            <!-- 國家列表滾動區 -->
                            <div id="countryOptionsContainer" class="max-h-44 overflow-y-auto pt-1 divide-y divide-gray-50 custom-scrollbar">
                                ${COUNTRY_LIST.map(c => `
                                    <div onclick="window.selectCountry('${c.code}', '${c.name}')" class="country-option flex items-center space-x-2 px-2.5 py-2 hover:bg-indigo-50 rounded-lg cursor-pointer transition-colors text-xs" data-name="${c.name.toLowerCase()}">
                                        <img src="https://flagcdn.com/w40/${c.code}.png" class="w-4 h-3 object-cover rounded-sm shadow-xs" onerror="this.src='https://flagcdn.com/w40/un.png'">
                                        <span class="text-gray-700">${c.name}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <input type="hidden" id="selectedCountryCode" value="tw">
                        <input type="hidden" id="selectedCountryName" value="Taiwan">
                    </div>
                    
                    <div class="flex space-x-2.5">
                        <button onclick="window.closeResultModal()" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50">${txt.modalRetryBtn}</button>
                        <button id="submitScoreBtn" onclick="window.submitLeaderboardScore()" class="flex-1 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 active:scale-95 transition-all">${txt.modalSubmitBtn}</button>
                    </div>
                </div>
            </div>
        </section>
    `;

    const targetMode = window.simMode || 'speed';
    window.setSimMode(targetMode);
};

/* --- 國家快速搜尋篩選 --- */
window.filterCountries = function() {
    const q = document.getElementById('countrySearchInput').value.toLowerCase().trim();
    const options = document.querySelectorAll('.country-option');
    options.forEach(opt => {
        const name = opt.getAttribute('data-name');
        if (name.includes(q)) {
            opt.classList.remove('hidden');
        } else {
            opt.classList.add('hidden');
        }
    });
};

/* --- 國旗選單控制 --- */
window.toggleCountryDropdown = function(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById('countryDropdownList');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
        if (!dropdown.classList.contains('hidden')) {
            const searchInput = document.getElementById('countrySearchInput');
            if (searchInput) {
                searchInput.value = '';
                window.filterCountries();
                setTimeout(() => searchInput.focus(), 100);
            }
        }
    }
};

window.selectCountry = function(code, name) {
    document.getElementById('selectedCountryCode').value = code;
    document.getElementById('selectedCountryName').value = name;
    
    const display = document.getElementById('selectedCountryDisplay');
    if (display) {
        display.innerHTML = `
            <img src="https://flagcdn.com/w40/${code}.png" class="w-4 h-3 object-cover rounded-sm shadow-xs" onerror="this.src='https://flagcdn.com/w40/un.png'">
            <span class="font-medium text-gray-800">${name} (${code.toUpperCase()})</span>
        `;
    }
    const dropdown = document.getElementById('countryDropdownList');
    if (dropdown) dropdown.classList.add('hidden');
};

document.addEventListener('click', () => {
    const dropdown = document.getElementById('countryDropdownList');
    if (dropdown) dropdown.classList.add('hidden');
});

/* --- 模式切換邏輯 (切換遊戲模式時自動切換排行榜) --- */
window.setSimMode = function(mode) {
    window.simMode = mode;
    const langKey = document.getElementById('langSelect')?.value || window.currentLang || 'zh-TW';
    const t = (window.translations && window.translations[langKey]) || window.translations?.zh || {};
    const isEn = langKey.startsWith('en');

    if (window.gameInterval) {
        clearInterval(window.gameInterval);
        window.gameInterval = null;
        const startBtn = document.getElementById('startGameBtn');
        if (startBtn) startBtn.textContent = t.startBtnText || (isEn ? 'Start 10s Challenge' : '開始 10 秒極限挑戰');
    }

    ['speed', 'color', 'home'].forEach(m => {
        const btn = document.getElementById(`tab-${m}`);
        if (btn) {
            if (m === mode) {
                btn.className = "flex-1 py-1.5 text-xs font-semibold rounded-full bg-white text-black shadow transition-all font-bold cursor-pointer";
            } else {
                btn.className = "flex-1 py-1.5 text-xs font-semibold rounded-full text-gray-500 hover:text-gray-900 transition-all cursor-pointer";
            }
        }
    });

    const homePanel = document.getElementById('homeControlPanel');
    const gameDashboard = document.getElementById('gameDashboard');
    const startBtn = document.getElementById('startGameBtn');
    const leaderboardCard = document.getElementById('leaderboardCard');

    if (mode === 'home') {
        if (homePanel) homePanel.classList.remove('hidden');
        if (gameDashboard) gameDashboard.classList.add('hidden');
        if (startBtn) startBtn.classList.add('hidden');
        if (leaderboardCard) leaderboardCard.classList.add('hidden'); // 居家模式隱藏排行榜
        window.initAmbientWall();
        window.updateHomeColor();
    } else {
        if (homePanel) homePanel.classList.add('hidden');
        if (gameDashboard) gameDashboard.classList.remove('hidden');
        if (startBtn) startBtn.classList.remove('hidden');
        if (leaderboardCard) leaderboardCard.classList.remove('hidden');

        window.initSimWall();
        window.loadLeaderboard(); // ⚡ 自動載入當前遊戲模式的排行榜
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
};

/* --- 3x3 牆面生成 (維持 1:1 正比例) --- */
window.initSimWall = function() {
    const wall = document.getElementById('simulatedWall');
    if(!wall) return;
    wall.innerHTML = '';
    for(let i=0; i<9; i++) {
        wall.innerHTML += `
            <div id="pad-${i}" onclick="window.hitPad(${i})" class="w-full h-full aspect-square max-w-[80px] max-h-[80px] bg-gray-300 rounded-[1.25rem] octagon cursor-pointer flex items-center justify-center transition-all duration-100 shadow-inner hover:bg-gray-400 select-none active:scale-95 shrink-0">
                <div class="w-[48%] h-[48%] aspect-square bg-gray-100 rounded-lg pentagon shadow-sm pointer-events-none"></div>
            </div>
        `;
    }
    window.updatePowerCalculation();
};

/* --- 3x3 居家模式生成 --- */
window.initAmbientWall = function() {
    const wall = document.getElementById('simulatedWall');
    if(!wall) return;
    wall.innerHTML = '';
    for(let i=0; i<9; i++) {
        wall.innerHTML += `
            <div id="pad-${i}" class="w-full h-full aspect-square max-w-[80px] max-h-[80px] bg-gray-900 rounded-[1.25rem] octagon flex items-center justify-center transition-all duration-300 shadow-md shrink-0">
                <div class="w-[52%] h-[52%] aspect-square bg-gray-200 rounded-lg pentagon shadow-sm transition-all duration-300 pointer-events-none" id="inner-pad-${i}"></div>
            </div>
        `;
    }
}; 

/* --- 居家調光渲染 --- */
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
    const glowShadow = `0 0 16px hsla(${hue}, ${sat}%, 50%, ${bri / 100})`;

    for (let i = 0; i < 9; i++) {
        const innerPad = document.getElementById(`inner-pad-${i}`);
        if (innerPad) {
            innerPad.style.backgroundColor = hslColor;
            innerPad.style.boxShadow = bri > 5 ? glowShadow : 'none';
        }
    }
    window.updatePowerCalculation();
};

/* --- 電網負載計算 --- */
window.updatePowerCalculation = function() {
    let totalCurrent = 180;

    if (window.simMode === 'home') {
        const bri = parseInt(document.getElementById('briRange')?.value || 60);
        totalCurrent += Math.round(9 * 140 * (bri / 100)); 
    } else {
        totalCurrent += 180;
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
    const isEn = langKey.startsWith('en');

    if (currentVal) currentVal.textContent = `${totalCurrent} mA`;
    if (loadPercentVal) loadPercentVal.textContent = `${loadPercent}%`;
    if (loadProgressBar) {
        loadProgressBar.style.width = `${loadPercent}%`;
        loadProgressBar.className = loadPercent > 85 ? "h-full bg-red-500 transition-all duration-300" : "h-full bg-emerald-500 transition-all duration-300";
    }

    if (protectionIndicator && protectionText) {
        if (loadPercent > 85) {
            protectionIndicator.className = "w-2 h-2 rounded-full bg-red-500";
            protectionText.className = "font-medium text-red-600";
            protectionText.textContent = t.statusLimit || (isEn ? 'Power Protection' : '電網保護中');
        } else {
            protectionIndicator.className = "w-2 h-2 rounded-full bg-emerald-500";
            protectionText.className = "font-medium text-emerald-600";
            protectionText.textContent = t.statusSafe || (isEn ? 'Safe Operating Zone' : '安全工作範圍');
        }
    }
};

/* --- Web Audio API 音效引擎 --- */
window.audioCtx = null;
window.gameInterval = null;
window.gameScore = 0;
window.gameTimeLeft = 10;
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

/* --- 10 秒倒數挑戰控制 --- */
window.toggleGame = function() {
    const startBtn = document.getElementById('startGameBtn');
    const langKey = document.getElementById('langSelect')?.value || window.currentLang || 'zh-TW';
    const t = (window.translations && window.translations[langKey]) || window.translations?.zh || {};
    const isEn = langKey.startsWith('en');

    if (window.gameInterval) {
        clearInterval(window.gameInterval);
        window.gameInterval = null;
        if (startBtn) startBtn.textContent = t.startBtnText || (isEn ? 'Start 10s Challenge' : '開始 10 秒極限挑戰');
        window.initSimWall();
    } else {
        window.gameScore = 0;
        window.gameTimeLeft = 10;
        window.totalHits = 0;
        window.reactionSum = 0;
        window.currentAvgReact = 0;
        if (document.getElementById('scoreVal')) document.getElementById('scoreVal').textContent = '0';
        if (document.getElementById('timeVal')) document.getElementById('timeVal').textContent = '10s';
        if (document.getElementById('reactVal')) document.getElementById('reactVal').textContent = `0${t.ms || 'ms'}`;
        if (startBtn) startBtn.textContent = t.stopBtnText || (isEn ? 'Stop Challenge' : '停止測試');
        
        window.playSound('success');
        window.nextTarget();
        
        window.gameInterval = setInterval(() => {
            window.gameTimeLeft--;
            if (document.getElementById('timeVal')) document.getElementById('timeVal').textContent = `${window.gameTimeLeft}s`;
            if (window.gameTimeLeft <= 0) {
                clearInterval(window.gameInterval);
                window.gameInterval = null;
                if (startBtn) startBtn.textContent = t.startBtnText || (isEn ? 'Start 10s Challenge' : '開始 10 秒極限挑戰');
                window.showResultModal();
            }
        }, 1000);
    }
};

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

window.hitPad = function(id) {
    if (!window.gameInterval) return;
    if (id !== window.targetId) return;
    const duration = Math.round(performance.now() - window.speedTimer);
    const langKey = document.getElementById('langSelect')?.value || window.currentLang || 'zh-TW';
    const t = (window.translations && window.translations[langKey]) || window.translations?.zh || {};
    const msText = t.ms || 'ms';

    if (window.simMode === 'speed') {
        window.gameScore += 10;
        window.totalHits++;
        window.reactionSum += duration;
        window.playSound('hit');
        if (document.getElementById('scoreVal')) document.getElementById('scoreVal').textContent = window.gameScore;
        if (document.getElementById('reactVal')) document.getElementById('reactVal').textContent = `${Math.round(window.reactionSum / window.totalHits)}${msText}`;
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
            document.getElementById('reactVal').textContent = `${Math.round(window.reactionSum / window.totalHits)}${msText}`;
        }
        window.nextTarget();
    }
};

window.showResultModal = function() {
    window.playSound('success');
    window.currentAvgReact = window.totalHits > 0 ? Math.round(window.reactionSum / window.totalHits) : 0;
    
    document.getElementById('modalScoreVal').textContent = window.gameScore;
    document.getElementById('modalReactVal').textContent = `${window.currentAvgReact}ms`;
    document.getElementById('modalHitsVal').textContent = window.totalHits;
    
    const currentMode = window.simMode || 'speed';
    const modeLabel = document.getElementById('modalGameModeLabel');
    if (modeLabel) {
        modeLabel.textContent = currentMode === 'speed' ? '⚡ SPEED CHALLENGE 10s' : '🎨 COLOR SHIFT CHALLENGE 10s';
    }

    document.getElementById('resultModal').classList.remove('hidden');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    window.initSimWall();
};

window.closeResultModal = function() {
    document.getElementById('resultModal').classList.add('hidden');
};

function parseCountryCode(countryStr) {
    if (!countryStr) return 'un';
    const clean = countryStr.toLowerCase().trim();
    if (clean.length === 2) return clean;
    const match = clean.match(/\b([a-z]{2})\b/);
    if (match && match[1]) return match[1];
    return 'un';
}

/* --- 排行榜讀取（自動抓取當前 window.simMode 的排行） --- */
window.loadLeaderboard = async function() {
    const list = document.getElementById('leaderboardList');
    if (!list) return;
    
    const currentMode = (window.simMode === 'color') ? 'color' : 'speed';
    const isEn = (window.currentLang || document.getElementById('langSelect')?.value || '').startsWith('en');
    const txtLoading = isEn ? 'Loading ranking...' : '載入最新排行中...';
    const txtNoRecords = isEn ? 'No records yet. Be the first!' : '尚無紀錄，快來搶下第一！';
    const txtScoreUnit = isEn ? 'pts' : '分';

    if (!window.LeaderboardService) {
        list.innerHTML = `<div class="py-3 text-center text-gray-400 text-xs">Service Unavailable</div>`;
        return;
    }
    
    list.innerHTML = `<div class="py-3 text-center text-gray-400 text-xs">${txtLoading}</div>`;
    const topScores = await window.LeaderboardService.getTopScores(currentMode);
    
    if (!topScores || topScores.length === 0) {
        list.innerHTML = `<div class="py-3 text-center text-gray-400 text-xs">${txtNoRecords}</div>`;
        return;
    }

    list.innerHTML = topScores.map((item, index) => {
        const isHardware = item.device && item.device.includes('ESP32');
        const countryCode = parseCountryCode(item.country);
        const reactMs = item.reactTime || item.react_time || 0;
        
        return `
            <div class="py-2.5 flex items-center justify-between gap-2">
                <div class="flex items-center space-x-2 min-w-0 flex-1">
                    <span class="w-4 text-center font-bold shrink-0 ${index === 0 ? 'text-amber-500 font-extrabold text-xs' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-700' : 'text-gray-300'}">${index + 1}</span>
                    <img src="https://flagcdn.com/w40/${countryCode}.png" class="w-4 h-3 object-cover rounded-xs shadow-xs shrink-0" onerror="this.src='https://flagcdn.com/w40/un.png'">
                    <span class="font-medium text-gray-800 text-xs truncate max-w-[120px] sm:max-w-[150px]" title="${item.name}">${item.name}</span>
                    <span class="text-[9px] px-1 py-0.2 rounded font-semibold shrink-0 ${isHardware ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-500'}">
                        ${isHardware ? 'ESP32' : 'Web'}
                    </span>
                </div>
                <div class="text-right shrink-0">
                    <div class="font-bold text-indigo-600 text-xs">${item.score} <span class="text-[9px] font-normal text-gray-400">${txtScoreUnit}</span></div>
                    <div class="text-[10px] text-gray-400 font-mono">${reactMs}ms</div>
                </div>
            </div>
        `;
    }).join('');
};

/* --- 提交成績至當前模式並自動刷新 --- */
window.submitLeaderboardScore = async function() {
    const name = document.getElementById('playerNameInput')?.value;
    const countryCode = document.getElementById('selectedCountryCode')?.value || 'tw';
    const submitBtn = document.getElementById('submitScoreBtn');
    const currentMode = (window.simMode === 'color') ? 'color' : 'speed';

    const isEn = (window.currentLang || document.getElementById('langSelect')?.value || '').startsWith('en');

    if (submitBtn) {
        submitBtn.innerText = isEn ? 'Saving...' : '儲存中...';
        submitBtn.disabled = true;
    }

    await window.LeaderboardService.submitScore(name, countryCode.toUpperCase(), window.gameScore, window.currentAvgReact, currentMode);
    
    if (submitBtn) {
        submitBtn.innerText = isEn ? 'Submit Score' : '登記排行';
        submitBtn.disabled = false;
    }

    document.getElementById('playerNameInput').value = '';
    window.closeResultModal();

    setTimeout(() => {
        window.loadLeaderboard();
    }, 1500);
};