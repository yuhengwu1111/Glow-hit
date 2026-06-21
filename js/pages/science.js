window.renderScience = function(app, t) {
    app.innerHTML = `
        <section class="max-w-5xl mx-auto px-6 pt-12">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight">${t.scienceTitle}</h2>
                <p class="text-gray-500 mt-4 max-w-2xl mx-auto">${t.scienceIntro}</p>
            </div>
            <div class="space-y-12">
                <div class="apple-card p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-8">
                        <span class="text-xs font-bold uppercase tracking-wider text-orange-500">${t.sci1Tag}</span>
                        <h3 class="text-2xl font-bold mt-2 mb-4">${t.sci1Title}</h3>
                        <p class="text-sm text-gray-500 leading-relaxed">${t.sci1Desc}</p>
                        <div class="mt-6">
                            <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1738888/full" target="_blank" class="text-xs font-semibold text-blue-600 hover:underline flex items-center space-x-1">
                                <span>${t.sci1Link}</span><i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                            </a>
                        </div>
                    </div>
                    <div class="md:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-center"><i data-lucide="brain-circuit" class="w-20 h-20 text-orange-500/85"></i></div>
                </div>
                <div class="apple-card p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-8">
                        <span class="text-xs font-bold uppercase tracking-wider text-emerald-500">${t.sci2Tag}</span>
                        <h3 class="text-2xl font-bold mt-2 mb-4">${t.sci2Title}</h3>
                        <p class="text-sm text-gray-500 leading-relaxed">${t.sci2Desc}</p>
                        <div class="mt-6">
                            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3506161/" target="_blank" class="text-xs font-semibold text-blue-600 hover:underline flex items-center space-x-1">
                                <span>${t.sci2Link}</span><i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                            </a>
                        </div>
                    </div>
                    <div class="md:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-center"><i data-lucide="activity" class="w-20 h-20 text-emerald-500/85"></i></div>
                </div>
                <div class="apple-card p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-8">
                        <span class="text-xs font-bold uppercase tracking-wider text-purple-500">${t.sci3Tag}</span>
                        <h3 class="text-2xl font-bold mt-2 mb-4">${t.sci3Title}</h3>
                        <p class="text-sm text-gray-500 leading-relaxed">${t.sci3Desc}</p>
                        <div class="mt-6">
                            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12921918/" target="_blank" class="text-xs font-semibold text-blue-600 hover:underline flex items-center space-x-1">
                                <span>${t.sci3Link}</span><i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                            </a>
                        </div>
                    </div>
                    <div class="md:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-center"><i data-lucide="eye" class="w-20 h-20 text-purple-500/85"></i></div>
                </div>
            </div>
        </section>
    `;
};