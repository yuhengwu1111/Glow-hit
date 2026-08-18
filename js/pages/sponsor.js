window.renderSponsor = function(app, t) {
    t = t || {};
    const isEn = (window.currentLang || '').startsWith('en');

    const txt = {
        title: t.sponsorTitle || (isEn ? 'Sponsors & Partners' : '贊助夥伴'),
        subtitle: t.sponsorSub || (isEn ? 'Thank you to our valued sponsors supporting GlowHit.' : '感謝所有支持 GlowHit 專案推動與研發創新的贊助夥伴。')
    };

    app.innerHTML = `
        <section class="max-w-4xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-24 text-center">
            <!-- 頂部標籤 -->
            <div class="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
                <i data-lucide="heart-handshake" class="w-4 h-4"></i>
                <span>Sponsors</span>
            </div>

            <!-- 主標題與說明 -->
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">${txt.title}</h2>
            <p class="text-gray-500 mt-3 text-sm md:text-base max-w-lg mx-auto leading-relaxed">${txt.subtitle}</p>

            <!-- 贊助商列表 -->
            <div class="mt-12 flex flex-wrap justify-center gap-8">
                
                <!-- 贊助商卡片：Dacian technology -->
                <div class="flex flex-col items-center group">
                    <!-- 白色正方形 LOGO 外框 -->
                    <div class="w-56 h-56 sm:w-64 sm:h-64 bg-white border border-gray-200 rounded-sm p-6 flex flex-col items-center justify-center shadow-xs transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                        
                        <!-- 實體圖片 (若存在則顯示) -->
                        <img src="assets/icons/dacian-logo.jpg" 
                             alt="Dacian technology Logo" 
                             class="max-w-full max-h-full object-contain"
                             onerror="this.style.display='none'; document.getElementById('dc-vector-logo').classList.remove('hidden');">
                        
                        <!-- 向量備用 LOGO (:dc 克微粒) -->
                        <div id="dc-vector-logo" class="hidden flex flex-col items-center justify-center text-gray-900 select-none">
                            <div class="flex items-center space-x-1.5 font-black text-4xl sm:text-5xl tracking-tighter">
                                <span class="text-3xl sm:text-4xl leading-none">:</span>
                                <span class="font-extrabold tracking-tight">dc</span>
                                <span class="text-xs font-bold self-start mt-1">®</span>
                            </div>
                            <span class="text-[9px] sm:text-[10px] tracking-tight font-medium text-gray-500 mt-1 uppercase text-center scale-90">Microparticle Stopper Mask</span>
                            <span class="text-lg sm:text-xl font-bold tracking-widest text-gray-900 mt-1">克微粒</span>
                        </div>
                    </div>
                    
                    <!-- 外框下方文字標題 -->
                    <span class="mt-4 text-lg sm:text-xl font-bold text-[#004b87] tracking-wide">
                        Dacian technology
                    </span>
                </div>

            </div>
        </section>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};