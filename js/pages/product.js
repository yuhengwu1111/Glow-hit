window.renderProduct = function(app, t) {
    app.innerHTML = `
        <section class="max-w-6xl mx-auto px-6 pt-12">
            <div class="text-center mb-16">
                <span class="text-xs font-bold uppercase tracking-widest text-blue-600">Hardware & Industrial Design</span>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mt-2">${t.explodedTitle}</h2>
                <p class="text-gray-500 mt-4 max-w-xl mx-auto">${t.explodedSub}</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
                
                <div class="lg:col-span-5 sticky top-28 flex justify-center bg-gray-50 p-4 rounded-[2.5rem] border border-gray-100 shadow-inner">
                    <img src="assets/images/disassembly.png" alt="GlowHit 3D Disassembly Diagram" class="w-full h-auto max-w-md rounded-2xl object-contain mix-blend-multiply">
                </div>

                <div class="lg:col-span-7 space-y-4">
                    
                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md">
                        <h4 class="text-base font-bold text-gray-900 mb-1 flex items-center space-x-2">
                            <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                            <span>${t.partWs2812}</span>
                        </h4>
                        <p class="text-xs text-gray-500 leading-relaxed pl-4">${t.partWs2812Desc}</p>
                    </div>

                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md">
                        <h4 class="text-base font-bold text-gray-900 mb-1 flex items-center space-x-2">
                            <span class="w-2 h-2 rounded-full bg-gray-600"></span>
                            <span>${t.partSupport}</span>
                        </h4>
                        <p class="text-xs text-gray-500 leading-relaxed pl-4">${t.partSupportDesc}</p>
                    </div>

                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md">
                        <h4 class="text-base font-bold text-gray-900 mb-1 flex items-center space-x-2">
                            <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                            <span>${t.partTopCover}</span>
                        </h4>
                        <p class="text-xs text-gray-500 leading-relaxed pl-4">${t.partTopCoverDesc}</p>
                    </div>

                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md">
                        <h4 class="text-base font-bold text-gray-900 mb-1 flex items-center space-x-2">
                            <span class="w-2 h-2 rounded-full bg-indigo-400"></span>
                            <span>${t.partSpring}</span>
                        </h4>
                        <p class="text-xs text-gray-500 leading-relaxed pl-4">${t.partSpringDesc}</p>
                    </div>

                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md">
                        <h4 class="text-base font-bold text-gray-900 mb-1 flex items-center space-x-2">
                            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span>${t.partTouch}</span>
                        </h4>
                        <p class="text-xs text-gray-500 leading-relaxed pl-4">${t.partTouchDesc}</p>
                    </div>

                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md">
                        <h4 class="text-base font-bold text-gray-900 mb-1 flex items-center space-x-2">
                            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                            <span>${t.partEsp32}</span>
                        </h4>
                        <p class="text-xs text-gray-500 leading-relaxed pl-4">${t.partEsp32Desc}</p>
                    </div>

                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md">
                        <h4 class="text-base font-bold text-gray-900 mb-1 flex items-center space-x-2">
                            <span class="w-2 h-2 rounded-full bg-orange-400"></span>
                            <span>${t.partBattery}</span>
                        </h4>
                        <p class="text-xs text-gray-500 leading-relaxed pl-4">${t.partBatteryDesc}</p>
                    </div>

                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md">
                        <h4 class="text-base font-bold text-gray-900 mb-1 flex items-center space-x-2">
                            <span class="w-2 h-2 rounded-full bg-gray-500"></span>
                            <span>${t.partBase}</span>
                        </h4>
                        <p class="text-xs text-gray-500 leading-relaxed pl-4">${t.partBaseDesc}</p>
                    </div>

                </div>
            </div>

            <div class="border-t border-gray-200 pt-20">
                <div class="text-center mb-16">
                    <h3 class="text-2xl md:text-4xl font-bold tracking-tight">${t.layoutTitle}</h3>
                    <p class="text-gray-500 mt-2 text-sm">${t.layoutSub}</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="apple-card p-6 bg-white border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                        <div>
                            <div class="w-full h-40 bg-gray-50 rounded-2xl mb-4 overflow-hidden flex items-center justify-center p-2 border border-gray-50">
                                <img src="assets/images/layout_honeycomb.png" alt="Honeycomb Layout" class="w-full h-full object-contain mix-blend-multiply">
                            </div>
                            <div class="flex items-center space-x-2 mb-3 text-orange-500">
                                <i data-lucide="layout-grid" class="w-5 h-5"></i>
                                <h5 class="font-bold text-lg text-gray-900">${t.layoutHoneycomb}</h5>
                            </div>
                            <p class="text-xs text-gray-500 leading-relaxed">${t.layoutHoneycombDesc}</p>
                        </div>
                    </div>
                    
                    <div class="apple-card p-6 bg-white border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                        <div>
                            <div class="w-full h-40 bg-gray-50 rounded-2xl mb-4 overflow-hidden flex items-center justify-center p-2 border border-gray-50">
                                <img src="assets/images/layout_matrix.png" alt="Matrix Layout" class="w-full h-full object-contain mix-blend-multiply">
                            </div>
                            <div class="flex items-center space-x-2 mb-3 text-blue-500">
                                <i data-lucide="grid" class="w-5 h-5"></i>
                                <h5 class="font-bold text-lg text-gray-900">${t.layoutMatrix}</h5>
                            </div>
                            <p class="text-xs text-gray-500 leading-relaxed">${t.layoutMatrixDesc}</p>
                        </div>
                    </div>

                    <div class="apple-card p-6 bg-white border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                        <div>
                            <div class="w-full h-40 bg-gray-50 rounded-2xl mb-4 overflow-hidden flex items-center justify-center p-2 border border-gray-50">
                                <img src="assets/images/layout_random.png" alt="Random DIY Layout" class="w-full h-full object-contain mix-blend-multiply">
                            </div>
                            <div class="flex items-center space-x-2 mb-3 text-purple-500">
                                <i data-lucide="shuffle" class="w-5 h-5"></i>
                                <h5 class="font-bold text-lg text-gray-900">${t.layoutRandom}</h5>
                            </div>
                            <p class="text-xs text-gray-500 leading-relaxed">${t.layoutRandomDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    lucide.createIcons();
}; 