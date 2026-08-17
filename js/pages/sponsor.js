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
                
                <!-- 贊助商項目 (白底正方外框 + 下方字體) -->
                <div class="flex flex-col items-center group">
                    <div class="w-56 h-56 sm:w-64 sm:h-64 bg-white border border-gray-200 rounded-sm p-6 sm:p-8 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                        <img src="assets/iaon/dacianlogo.png" alt="Dacian technology Logo" class="max-w-full max-h-full object-contain" onerror="this.src='assets/icons/LOGO.png'">
                    </div>
                    
                    <span class="mt-4 text-lg sm:text-xl font-bold text-[#004b87] tracking-wide">
                        Dacian technology
                    </span>
                </div>

            </div>
        </section>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};