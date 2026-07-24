window.renderScience = function(app, t) {
    app.innerHTML = `
        <section class="max-w-4xl mx-auto px-4 md:px-6 pt-12">
            <div class="text-center mb-14">
                <span class="text-xs font-bold uppercase tracking-widest text-indigo-600">Scientific Foundation</span>
                <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-gray-900">${t.scienceTitle}</h2>
                <p class="text-gray-500 mt-4 text-sm max-w-2xl mx-auto">${t.scienceIntro}</p>
            </div>

            <div class="space-y-8">
                <!-- WHO Evidence 1 -->
                <div class="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                    <span class="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-semibold text-xs rounded-full mb-4">${t.sci1Tag}</span>
                    <h3 class="text-xl font-bold mb-4 text-gray-900">${t.sci1Title}</h3>
                    <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line mb-4">${t.sci1Desc}</p>
                    <a href="https://www.who.int/publications/i/item/9789240015128" target="_blank" class="text-blue-500 text-xs hover:underline">${t.sci1Link}</a>
                </div>

                <!-- WHO Evidence 2 -->
                <div class="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                    <span class="inline-block px-3 py-1 bg-purple-50 text-purple-600 font-semibold text-xs rounded-full mb-4">${t.sci2Tag}</span>
                    <h3 class="text-xl font-bold mb-4 text-gray-900">${t.sci2Title}</h3>
                    <p class="text-sm text-gray-600 leading-relaxed mb-4">${t.sci2Desc}</p>
                    <a href="https://www.who.int/news-room/fact-sheets/detail/ageing-and-health" target="_blank" class="text-blue-500 text-xs hover:underline">${t.sci2Link}</a>
                </div>

                <!-- GlowHit Implementation -->
                <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 p-8 rounded-2xl shadow-sm">
                    <span class="inline-block px-3 py-1 bg-indigo-600 text-white font-semibold text-xs rounded-full mb-4">${t.sci3Tag}</span>
                    <h3 class="text-xl font-bold mb-4 text-gray-900">${t.sci3Title}</h3>
                    <p class="text-sm text-gray-700 leading-relaxed whitespace-pre-line">${t.sci3Desc}</p>
                </div>
            </div>
        </section>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
};