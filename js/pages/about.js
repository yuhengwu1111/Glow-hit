window.currentSlideIdx = 0;

window.renderAbout = function(app, t) {
    app.innerHTML = `
        <section class="max-w-5xl mx-auto px-6 pt-12">
            <div class="text-center mb-12">
                <span class="text-xs font-bold uppercase tracking-widest text-blue-600">Entrepreneurial Team Pitch</span>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mt-2">${t.aboutTitle}</h2>
                <p class="text-gray-500 mt-4 max-w-2xl mx-auto">${t.aboutBrief}</p>
                <p class="text-xs text-gray-400 mt-2">${t.aboutTeam}</p>
            </div>
            <div class="apple-card p-8 bg-gray-900 text-white rounded-[2rem] mb-12 relative overflow-hidden">
                <div class="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl"></div>
                <div class="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl"></div>
                <div id="slideContent" class="min-h-[250px] flex flex-col justify-center transition-all duration-300"></div>
                <div class="flex justify-between items-center border-t border-gray-800 pt-6 mt-8">
                    <span id="slideIndicator" class="text-xs text-gray-500 font-medium">Slide 1 of 5</span>
                    <div class="flex space-x-2">
                        <button onclick="changeSlide(-1)" class="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"><i data-lucide="chevron-left" class="w-5 h-5"></i></button>
                        <button onclick="changeSlide(1)" class="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition"><i data-lucide="chevron-right" class="w-5 h-5"></i></button>
                    </div>
                </div>
            </div>
            <div class="apple-card p-8">
                <h3 class="text-2xl font-bold tracking-tight mb-6 flex items-center space-x-2"><i data-lucide="badge-dollar-sign" class="w-6 h-6 text-emerald-500"></i><span>${t.budgetTitle}</span></h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-sm">
                        <thead>
                            <tr class="border-b border-gray-200 text-gray-400 font-medium">
                                <th class="pb-3 pr-4">${t.thItem}</th><th class="pb-3 px-4 text-right">${t.thBudget}</th><th class="pb-3 pl-4">${t.thRemarks}</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100 text-gray-700">
                            <tr><td class="py-3 pr-4 font-semibold">${t.tbItem1}</td><td class="py-3 px-4 text-right font-semibold text-emerald-600">$25,000</td><td class="py-3 pl-4 text-gray-400">${t.tbRemarks1}</td></tr>
                            <tr><td class="py-3 pr-4 font-semibold">${t.tbItem2}</td><td class="py-3 px-4 text-right font-semibold text-emerald-600">$35,000</td><td class="py-3 pl-4 text-gray-400">${t.tbRemarks2}</td></tr>
                            <tr><td class="py-3 pr-4 font-semibold">${t.tbItem3}</td><td class="py-3 px-4 text-right font-semibold text-emerald-600">$40,000</td><td class="py-3 pl-4 text-gray-400">${t.tbRemarks3}</td></tr>
                            <tr><td class="py-3 pr-4 font-semibold">${t.tbItem4}</td><td class="py-3 px-4 text-right font-semibold text-emerald-600">$37,000</td><td class="py-3 pl-4 text-gray-400">${t.tbRemarks4}</td></tr>
                            <tr class="border-t-2 border-black font-bold"><td class="py-4 pr-4">${t.tbTotal}</td><td class="py-4 px-4 text-right text-black text-lg">$137,000</td><td class="py-4 pl-4 text-black">${t.tbTotalRemarks}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="apple-card p-8 mt-12">
                <h3 class="text-2xl font-bold tracking-tight mb-6 flex items-center space-x-2"><i data-lucide="milestone" class="w-6 h-6 text-indigo-500"></i><span>${t.milestoneTitle}</span></h3>
                <div class="space-y-6">
                    <div class="flex items-start space-x-4"><div class="w-3.5 h-3.5 rounded-full bg-emerald-500 mt-1"></div><p class="text-sm text-gray-600 leading-relaxed">${t.milestone1}</p></div>
                    <div class="flex items-start space-x-4"><div class="w-3.5 h-3.5 rounded-full bg-emerald-500 mt-1"></div><p class="text-sm text-gray-600 leading-relaxed">${t.milestone2}</p></div>
                    <div class="flex items-start space-x-4"><div class="w-3.5 h-3.5 rounded-full bg-indigo-500 mt-1 animate-pulse"></div><p class="text-sm text-gray-600 font-semibold leading-relaxed">${t.milestone3}</p></div>
                </div>
            </div>
        </section>
    `;
    window.initSlide();
};

window.initSlide = function() {
    window.currentSlideIdx = 0;
    window.renderSlide();
};

window.changeSlide = function(direction) {
    window.currentSlideIdx = (window.currentSlideIdx + direction + 5) % 5;
    window.renderSlide();
};

window.renderSlide = function() {
    const container = document.getElementById('slideContent');
    const indicator = document.getElementById('slideIndicator');
    if(!container) return;

    const t = window.translations[window.currentLang];
    let slideTitle = "", slideDesc = "", slideIcon = "sparkles";

    switch(window.currentSlideIdx) {
        case 0: slideTitle = t.slide1Title; slideDesc = t.slide1Desc; slideIcon = "sparkles"; break;
        case 1: slideTitle = t.slide2Title; slideDesc = t.slide2Desc; slideIcon = "cpu"; break;
        case 2: slideTitle = t.slide3Title; slideDesc = t.slide3Desc; slideIcon = "home"; break;
        case 3: slideTitle = t.slide4Title; slideDesc = t.slide4Desc; slideIcon = "shield"; break;
        case 4: slideTitle = t.slide5Title; slideDesc = t.slide5Desc; slideIcon = "trending-up"; break;
    }

    container.innerHTML = `
        <div class="flex items-center space-x-3 mb-4">
            <div class="p-2 bg-blue-500/10 text-blue-400 rounded-xl"><i data-lucide="${slideIcon}" class="w-6 h-6"></i></div>
            <h4 class="text-xl md:text-2xl font-bold tracking-tight text-white">${slideTitle}</h4>
        </div>
        <p class="text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl mt-2">${slideDesc}</p>
    `;
    indicator.textContent = `${t.slideOf} ${window.currentSlideIdx + 1} ${t.slideOfMax}`;
    lucide.createIcons();
};