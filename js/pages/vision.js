window.renderVision = function(app, t) {
    app.innerHTML = `
        <section class="max-w-4xl mx-auto px-6 pt-12">
            <div class="text-center mb-16">
                <span class="text-xs font-bold uppercase tracking-widest text-blue-600">Brand Vision & Market Strategy</span>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mt-2">${t.visionTitle}</h2>
                <p class="text-gray-500 mt-4 max-w-2xl mx-auto">${t.visionSubtitle}</p>
            </div>

            <div class="space-y-12">
                <!-- Why We Do This (初衷) -->
                <div class="apple-card p-8 relative overflow-hidden">
                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl"></div>
                    <h3 class="text-2xl font-bold mb-4 flex items-center space-x-3 text-gray-900">
                        <i data-lucide="lightbulb" class="w-6 h-6 text-yellow-500"></i>
                        <span>${t.visionOriginTitle}</span>
                    </h3>
                    <p class="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">${t.visionOriginDesc}</p>
                </div>

                <!-- Core Target Audience (客群) -->
                <div class="apple-card p-8">
                    <h3 class="text-2xl font-bold mb-6 flex items-center space-x-3 text-gray-900">
                        <i data-lucide="users" class="w-6 h-6 text-blue-500"></i>
                        <span>${t.visionAudienceTitle}</span>
                    </h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- TA 1 -->
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 transition hover:bg-gray-100/70">
                            <div class="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4 text-orange-500">
                                <i data-lucide="dumbbell" class="w-5 h-5"></i>
                            </div>
                            <h4 class="font-bold text-lg mb-2 text-gray-800">${t.visionTA1Title}</h4>
                            <p class="text-xs text-gray-500 leading-relaxed">${t.visionTA1Desc}</p>
                        </div>

                        <!-- TA 2 -->
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 transition hover:bg-gray-100/70">
                            <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 text-indigo-500">
                                <i data-lucide="home" class="w-5 h-5"></i>
                            </div>
                            <h4 class="font-bold text-lg mb-2 text-gray-800">${t.visionTA2Title}</h4>
                            <p class="text-xs text-gray-500 leading-relaxed">${t.visionTA2Desc}</p>
                        </div>

                        <!-- TA 3 -->
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 transition hover:bg-gray-100/70">
                            <div class="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 text-emerald-500">
                                <i data-lucide="heart-pulse" class="w-5 h-5"></i>
                            </div>
                            <h4 class="font-bold text-lg mb-2 text-gray-800">${t.visionTA3Title}</h4>
                            <p class="text-xs text-gray-500 leading-relaxed">${t.visionTA3Desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    lucide.createIcons();
};