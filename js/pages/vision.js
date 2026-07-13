window.renderVision = function(app, t) {
    app.innerHTML = `
        <section class="max-w-4xl mx-auto px-4 md:px-6 pt-8 md:pt-12">
            <!-- Section Header -->
            <div class="text-center mb-10 md:mb-16">
                <span class="text-xs font-bold uppercase tracking-widest text-indigo-600">Core Vision & Target Audience</span>
                <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-gray-900">${t.visionTitle}</h2>
                <p class="text-gray-500 mt-3 md:mt-4 text-sm md:text-base max-w-2xl mx-auto">${t.visionSubtitle}</p>
            </div>

            <!-- Section 1: Core Vision & Home Pain Points -->
            <div class="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm text-left mb-8 md:mb-12">
                <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <i data-lucide="target" class="w-5 h-5 text-indigo-500"></i>
                    <span>${t.visionOriginTitle}</span>
                </h3>
                <p class="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">${t.visionOriginDesc}</p>
            </div>

            <!-- Section 2: Precise Target Customer Alignment & Benefits -->
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-gray-900 text-left flex items-center space-x-2">
                    <i data-lucide="users" class="w-5 h-5 text-indigo-500"></i>
                    <span>${t.visionAudienceTitle}</span>
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- TA 1: Seniors -->
                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-left transition-all duration-300 hover:shadow-md">
                        <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                            <i data-lucide="heart-pulse" class="w-5 h-5 text-blue-500"></i>
                        </div>
                        <h4 class="font-bold text-gray-900 text-base mb-2">${t.visionTA1Title}</h4>
                        <p class="text-xs md:text-sm text-gray-500 leading-relaxed">${t.visionTA1Desc}</p>
                    </div>

                    <!-- TA 2: Kids -->
                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-left transition-all duration-300 hover:shadow-md">
                        <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                            <i data-lucide="smartphone-off" class="w-5 h-5 text-emerald-500"></i>
                        </div>
                        <h4 class="font-bold text-gray-900 text-base mb-2">${t.visionTA2Title}</h4>
                        <p class="text-xs md:text-sm text-gray-500 leading-relaxed">${t.visionTA2Desc}</p>
                    </div>

                    <!-- TA 3: Smart Tech Homes -->
                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-left transition-all duration-300 hover:shadow-md">
                        <div class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                            <i data-lucide="layout-grid" class="w-5 h-5 text-purple-500"></i>
                        </div>
                        <h4 class="font-bold text-gray-900 text-base mb-2">${t.visionTA3Title}</h4>
                        <p class="text-xs md:text-sm text-gray-500 leading-relaxed">${t.visionTA3Desc}</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    // 重新驅動 Lucide 圖標渲染
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
};