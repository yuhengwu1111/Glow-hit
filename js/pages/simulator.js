window.renderSimulator = function(app, t) {
    app.innerHTML = `
        <section class="max-w-4xl mx-auto px-6 pt-12">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight">${t.simTitle}</h2>
                <p class="text-gray-500 mt-3">${t.simDesc}</p>
            </div>
            
            <div class="flex justify-center bg-gray-200 p-1.5 rounded-full mb-12 max-w-lg mx-auto">
                <button onclick="window.setSimMode('speed')" id="tab-speed" class="flex-1 py-2 text-xs font-semibold rounded-full text-gray-500 transition-all">${t.tabSpeed}</button>
                <button onclick="window.setSimMode('color')" id="tab-color" class="flex-1 py-2 text-xs font-semibold rounded-full text-gray-500 transition-all">${t.tabColor}</button>
                <button onclick="window.setSimMode('home')" id="tab-home" class="flex-1 py-2 text-xs font-semibold rounded-full text-gray-500 transition-all">${t.tabHome}</button>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div class="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center">
                    <div id="simulatedWall" class="grid grid-cols-3 gap-6 p-4 bg-gray-50 rounded-3xl border border-gray-200 w-full min-h-[320px]"></div>
                    <div id="gameDashboard" class="mt-8 w-full border-t border-gray-100 pt-6 grid grid-cols-3 gap-2 text-center text-xs">
                        <div><p class="text-gray-400 font-medium" id="lblScore">${t.scoreLabel}</p><p id="scoreVal" class="text-2xl font-bold text-black mt-1">0</p></div>
                        <div><p class="text-gray-400 font-medium" id="lblTime">${t.timeLabel}</p><p id="timeVal" class="text-2xl font-bold text-black mt-1">30s</p></div>
                        <div><p class="text-gray-400 font-medium" id="lblReact">${t.reactLabel}</p><p id="reactVal" class="text-2xl font-bold text-black mt-1">0ms</p></div>
                    </div>
                    <button id="startGameBtn" onclick="window.toggleGame()" class="mt-8 w-full py-3.5 rounded-full font-medium apple-btn-primary shadow-md">${t.startBtnText}</button>
                </div>
                
                <div class="lg:col-span-5 space-y-6">
                    <div id="homeControlPanel" class="apple-card p-6 hidden">
                        <h4 class="font-bold text-lg mb-4 flex items-center space-x-2"><i data-lucide="home" class="w-5 h-5 text-indigo-500"></i><span>${t.homeTitle}</span></h4>
                        <div class="space-y-6 text-sm">
                            <div><div class="flex justify-between mb-2"><span class="text-gray-500 font-medium">${t.homeHue}</span><span id="hueText" class="font-bold">180°</span></div><input type="range" id="hueRange" min="0" max="360" value="180" class="w-full" oninput="window.updateHomeColor()"></div>
                            <div><div class="flex justify-between mb-2"><span class="text-gray-500 font-medium">${t.homeSat}</span><span id="satText" class="font-bold">85%</span></div><input type="range" id="satRange" min="0" max="100" value="85" class="w-full" oninput="window.updateHomeColor()"></div>
                            <div><div class="flex justify-between mb-2"><span class="text-gray-500 font-medium">${t.homeBri}</span><span id="briText" class="font-bold">60%</span></div><input type="range" id="briRange" min="0" max="100" value="60" class="w-full" oninput="window.updateHomeColor()"></div>
                            <div><div class="flex justify-between mb-2"><span class="text-gray-500 font-medium">${t.homeTemp}</span><span id="tempText" class="font-bold">4500K</span></div><input type="range" id="tempRange" min="2700" max="6500" step="100" value="4500" class="w-full" oninput="window.updateHomeColor()"></div>
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

    // 同步原子化調度：強迫在 DOM 掛載完畢當下立刻對齊初始模式
    const targetMode = window.simMode || 'speed';
    window.setSimMode(targetMode);
};

window.initSimWall = function() {
    const wall = document.getElementById('simulatedWall');
    if(!wall) return;
    wall.innerHTML = '';
    // 建立 3x3 網格硬體按鈕
    for(let i=0; i<9; i++) {
        wall.innerHTML += `
            <div id="pad-${i}" onclick="window.hitPad(${i})" class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-[1.5rem] octagon cursor-pointer flex items-center justify-center transition-all duration-100 shadow-inner hover:bg-gray-400">
                <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-xl pentagon shadow-sm"></div>
            </div>
        `;
    }
    window.updatePowerCalculation();
};

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