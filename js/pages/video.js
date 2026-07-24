window.renderVideo = function(app, t) {
    app.innerHTML = `
        <section class="max-w-5xl mx-auto px-4 md:px-6 pt-8 md:pt-12">
            
            <!-- 頁面標頭 -->
            <div class="text-center mb-10 md:mb-14">
                <span class="text-xs font-bold uppercase tracking-widest text-indigo-600">Official Brand Film</span>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-gray-900">${t.videoTitle || 'GlowHit 品牌形象展示片'}</h2>
                <p class="text-gray-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">${t.videoSubtitle || '感受智慧燈光、極速反應訓練與居家美學交織的全新生活體驗。'}</p>
            </div>

            <!-- 🎬 原生 HTML5 高清影音播放器容器 -->
            <div class="bg-gray-950 border border-gray-800 rounded-3xl p-3 md:p-6 shadow-2xl mb-12 relative overflow-hidden">
                <div class="absolute -top-32 -left-32 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
                <div class="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
                
                <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black flex items-center justify-center">
                    <video 
                        controls 
                        playsinline 
                        preload="metadata"
                        class="w-full h-full object-cover">
                        <!-- 請將影片檔案存放在 assets/video/promo.mp4 -->
                        <source src="assets/video/promo.mp4" type="video/mp4">
                        您的瀏覽器不支援 HTML5 影片播放。
                    </video>
                </div>
            </div>

            <!-- 影片特色解說區塊 (雙欄排版) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div class="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm text-left transition-all duration-300 hover:shadow-md">
                    <div class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                        <i data-lucide="play-circle" class="w-5 h-5 text-indigo-600"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-base mb-2">${t.videoFeat1Title || '01. 實機打擊即時示範'}</h4>
                    <p class="text-xs md:text-sm text-gray-500 leading-relaxed">${t.videoFeat1Desc || '展示 ESP32 毫秒級微動感應與光點動態洗牌，感受最直覺的運動反應鏈。'}</p>
                </div>

                <div class="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm text-left transition-all duration-300 hover:shadow-md">
                    <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                        <i data-lucide="sun" class="w-5 h-5 text-amber-600"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-base mb-2">${t.videoFeat2Title || '02. 居家氛圍燈無縫切換'}</h4>
                    <p class="text-xs md:text-sm text-gray-500 leading-relaxed">${t.videoFeat2Desc || '運動結束一鍵轉化為室內溫馨氣氛燈飾，完美的現代智慧家居生活美學。'}</p>
                </div>
            </div>

        </section>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
};