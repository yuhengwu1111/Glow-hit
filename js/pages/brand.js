window.renderBrand = function(app, t) {
    app.innerHTML = `
        <section class="max-w-4xl mx-auto px-4 md:px-6 pt-8 md:pt-12">
            
            <!-- 頁面標頭 -->
            <div class="text-center mb-12 md:mb-16">
                <span class="text-xs font-bold uppercase tracking-widest text-indigo-600">Brand Identity & Philosophy</span>
                <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-gray-900">${t.brandTitle || 'GlowHit 品牌與 LOGO 設計理念'}</h2>
                <p class="text-gray-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">${t.brandSubtitle || '融合科技美學、運動科學與智慧家居的品牌視覺符號。'}</p>
            </div>

            <!-- LOGO 視覺展示高亮卡片 -->
            <div class="bg-gradient-to-b from-gray-900 to-gray-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 text-center relative overflow-hidden border border-gray-800">
                <div class="absolute -top-24 -left-24 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div class="absolute -bottom-24 -right-24 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl"></div>
                
                <div class="relative z-10 flex flex-col items-center">
                    <img src="assets/icons/LOGO.png" alt="GlowHit Brand Logo" class="w-28 h-28 md:w-36 md:h-36 object-contain mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)] transform transition-transform hover:scale-105 duration-300">
                    <h3 class="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300">GlowHit</h3>
                    <p class="text-gray-400 text-xs md:text-sm mt-2 tracking-widest uppercase">Smart Modular Agility Wall</p>
                </div>
            </div>

            <!-- 1. 品牌名稱拆解區塊 (Glow + Hit) -->
            <div class="mb-12">
                <div class="text-left mb-6">
                    <h3 class="text-xl md:text-2xl font-bold text-gray-900 flex items-center space-x-2">
                        <i data-lucide="sparkles" class="w-6 h-6 text-indigo-500"></i>
                        <span>${t.brandNameTitle || '品牌名稱由來：Glow + Hit'}</span>
                    </h3>
                    <p class="text-xs md:text-sm text-gray-400 mt-1">${t.brandNameSub || '「逐動光影，智享生活」的完美演繹'}</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Glow -->
                    <div class="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm text-left transition-all duration-300 hover:shadow-md">
                        <div class="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4">
                            <i data-lucide="sun" class="w-6 h-6 text-amber-500"></i>
                        </div>
                        <h4 class="text-lg font-bold text-gray-900 mb-2">${t.brandGlowTitle || 'Glow（智光 / 氛圍）'}</h4>
                        <p class="text-xs md:text-sm text-gray-600 leading-relaxed">${t.brandGlowDesc || '象徵智慧 LED 光束引導與室內美學。靜態時，它是優雅點亮生活空間的居家環境燈飾。'}</p>
                    </div>

                    <!-- Hit -->
                    <div class="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm text-left transition-all duration-300 hover:shadow-md">
                        <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                            <i data-lucide="zap" class="w-6 h-6 text-blue-500"></i>
                        </div>
                        <h4 class="text-lg font-bold text-gray-900 mb-2">${t.brandHitTitle || 'Hit（擊動 / 觸發）'}</h4>
                        <p class="text-xs md:text-sm text-gray-600 leading-relaxed">${t.brandHitDesc || '象徵物理打擊感、神經反應訓練與互動放電。動態時，它是活化大腦與手眼協調的極速運動牆。'}</p>
                    </div>
                </div>
            </div>

            <!-- 2. LOGO 幾何設計概念區塊 -->
            <div class="mb-12">
                <div class="text-left mb-6">
                    <h3 class="text-xl md:text-2xl font-bold text-gray-900 flex items-center space-x-2">
                        <i data-lucide="shapes" class="w-6 h-6 text-indigo-500"></i>
                        <span>${t.logoConceptTitle || 'LOGO 標誌視覺解析'}</span>
                    </h3>
                    <p class="text-xs md:text-sm text-gray-400 mt-1">${t.logoConceptSub || '以幾何符號語彙，詮釋產品的三大硬體核心與科技美學'}</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- 幾何結構 -->
                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-left">
                        <div class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                            <i data-lucide="hexagon" class="w-5 h-5 text-indigo-600"></i>
                        </div>
                        <h4 class="font-bold text-gray-900 text-base mb-2">${t.logoGeoTitle || '01. 蜂巢幾何結構'}</h4>
                        <p class="text-xs md:text-sm text-gray-500 leading-relaxed">${t.logoGeoDesc || '象徵 GlowHit 的模組化快拆拼接特性，代表無窮無盡的空間適應力與穩固的工業結構美學。'}</p>
                    </div>

                    <!-- 雙色漸層 -->
                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-left">
                        <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                            <i data-lucide="palette" class="w-5 h-5 text-emerald-600"></i>
                        </div>
                        <h4 class="font-bold text-gray-900 text-base mb-2">${t.logoColorTitle || '02. 雙重光譜漸層'}</h4>
                        <p class="text-xs md:text-sm text-gray-500 leading-relaxed">${t.logoColorDesc || '湛藍象徵 ESP32 毫秒級技術與腦力專注；金黃象徵運動熱情與居家模式的溫馨氛圍。'}</p>
                    </div>

                    <!-- 核心光核 -->
                    <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-left">
                        <div class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                            <i data-lucide="target" class="w-5 h-5 text-purple-600"></i>
                        </div>
                        <h4 class="font-bold text-gray-900 text-base mb-2">${t.logoCoreTitle || '03. 核心視覺光核'}</h4>
                        <p class="text-xs md:text-sm text-gray-500 leading-relaxed">${t.logoCoreDesc || '象徵視覺神經搜尋與手眼協調的核心觸發點，代表「大腦決策到肢體擊打」的神經鏈鏈結。'}</p>
                    </div>
                </div>
            </div>

        </section>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
};