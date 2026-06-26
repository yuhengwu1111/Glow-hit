window.renderHome = function(app, t) {
    app.innerHTML = `
        <section class="max-w-6xl mx-auto px-6 text-center pt-12 md:pt-20">
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-black transition-all duration-700">
                ${t.heroTitle}
            </h1>
            <p class="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                ${t.heroSub}
            </p>
            <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button onclick="navigate('simulator')" class="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium apple-btn-primary shadow-lg flex items-center justify-center space-x-2">
                    <span>${t.tryBtn}</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
                <button onclick="navigate('product')" class="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium apple-btn-secondary flex items-center justify-center">
                    ${t.exploreBtn}
                </button>
            </div>

            <div class="mt-16 relative flex justify-center items-center">
                <div class="w-72 h-72 md:w-80 md:h-80 bg-gray-950 rounded-[4rem] octagon flex items-center justify-center shadow-2xl relative transition-all duration-500 hover:scale-105" id="heroPlate">
                    <div class="absolute inset-2 octagon border-4 border-dashed border-cyan-400 opacity-60 animate-spin" style="animation-duration: 25s"></div>
                    <div class="absolute inset-4 octagon border-4 border-cyan-500/80 blur-sm"></div>
                    
                    <div class="w-40 h-40 bg-gray-100 rounded-[2rem] pentagon flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-100 active:scale-95 z-10" onclick="window.playSound('hit')">
                        <i data-lucide="zap" class="w-12 h-12 text-cyan-500 animate-pulse"></i>
                    </div>
                </div>
            </div>
        </section>

        <section class="max-w-6xl mx-auto px-6 mt-32">
            <h2 class="text-3xl md:text-4xl font-bold text-center tracking-tight mb-16">${t.highlightTitle}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div class="apple-card p-8 flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                            <i data-lucide="activity" class="w-6 h-6 text-orange-500"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-3">${t.highlightSportTitle}</h3>
                        <p class="text-gray-500 leading-relaxed">${t.highlightSportDesc}</p>
                    </div>
                    <div class="mt-8 flex items-center space-x-2 text-orange-500 font-semibold text-sm cursor-pointer hover:underline" onclick="navigate('simulator')">
                        <span>${t.highlightSportCTA}</span>
                        <i data-lucide="chevron-right" class="w-4 h-4"></i>
                    </div>
                </div>

                <div class="apple-card p-8 flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                            <i data-lucide="home" class="w-6 h-6 text-indigo-500"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-3">${t.highlightHomeTitle}</h3>
                        <p class="text-gray-500 leading-relaxed">${t.highlightHomeDesc}</p>
                    </div>
                    <div class="mt-8 flex items-center space-x-2 text-indigo-500 font-semibold text-sm cursor-pointer hover:underline" onclick="setHomeKitSimTab()">
                        <span>${t.highlightHomeCTA}</span>
                        <i data-lucide="chevron-right" class="w-4 h-4"></i>
                    </div>
                </div>

            </div>
        </section>

        <section class="max-w-6xl mx-auto px-6 mt-32">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="apple-card p-8 md:col-span-1">
                    <i data-lucide="blocks" class="w-8 h-8 text-blue-500 mb-4"></i>
                    <h4 class="text-lg font-bold mb-2">${t.legoTitle}</h4>
                    <p class="text-sm text-gray-500 leading-relaxed">${t.legoDesc}</p>
                </div>
                <div class="apple-card p-8 md:col-span-1">
                    <i data-lucide="smartphone" class="w-8 h-8 text-green-500 mb-4"></i>
                    <h4 class="text-lg font-bold mb-2">${t.homekitTitle}</h4>
                    <p class="text-sm text-gray-500 leading-relaxed">${t.homekitDesc}</p>
                </div>
                <div class="apple-card p-8 md:col-span-1">
                    <i data-lucide="cpu" class="w-8 h-8 text-purple-500 mb-4"></i>
                    <h4 class="text-lg font-bold mb-2">${t.espTitle}</h4>
                    <p class="text-sm text-gray-500 leading-relaxed">${t.espDesc}</p>
                </div>
            </div>
        </section>

        <section class="max-w-6xl mx-auto px-6 mt-32">
            <h2 class="text-3xl md:text-4xl font-bold text-center tracking-tight mb-16">${t.modesTitle}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center mb-4 text-cyan-500 font-bold">1</div>
                        <h5 class="font-bold text-lg mb-2">${t.modeSpeed}</h5>
                        <p class="text-sm text-gray-500 leading-relaxed">${t.modeSpeedDesc}</p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-4 text-indigo-500 font-bold">2</div>
                        <h5 class="font-bold text-lg mb-2">${t.modeColor}</h5>
                        <p class="text-sm text-gray-500 leading-relaxed">${t.modeColorDesc}</p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-4 text-emerald-500 font-bold">3</div>
                        <h5 class="font-bold text-lg mb-2">${t.modeTimer}</h5>
                        <p class="text-sm text-gray-500 leading-relaxed">${t.modeTimerDesc}</p>
                    </div>
                </div>

            </div>
        </section>
    `;
};