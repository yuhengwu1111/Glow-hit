window.currentPage = 'home';

window.navigate = function(page) {
    window.currentPage = page;
    const app = document.getElementById('app');
    if (!app) return;
    
    // 1. 抓取當前語言字典
    const langSelect = document.getElementById('langSelect');
    const langKey = langSelect ? langSelect.value : 'zh-TW';
    const t = window.translations[langKey] || window.translations.zh || window.translations.en;

    // 2. 切換分頁時，強制停止後台正在執行的遊戲倒數與計時器
    if (window.GlowHitEngine && window.GlowHitEngine.isActive) {
        window.GlowHitEngine.endGame();
    }
    if (window.gameInterval) {
        clearInterval(window.gameInterval);
        window.gameInterval = null;
    }

    // 3. 即時同步導覽列與選單多語系文字
    if (window.updateNavbarText) {
        window.updateNavbarText();
    }

    // 4. 更新導覽列高亮選取狀態
    const navLinks = document.querySelectorAll('.nav-link, .mob-nav-link');
    navLinks.forEach(link => {
        link.classList.remove('text-black', 'font-bold');
        link.classList.add('text-gray-500');
    });

    const activeNav = document.getElementById(`nav-${page}`);
    const activeMobNav = document.getElementById(`mob-nav-${page}`);
    if (activeNav) {
        activeNav.classList.remove('text-gray-500');
        activeNav.classList.add('text-black', 'font-bold');
    }
    if (activeMobNav) {
        activeMobNav.classList.remove('text-gray-500');
        activeMobNav.classList.add('text-black', 'font-bold');
    }

    // 5. 平滑捲動至視窗頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 6. 路由分頁視圖渲染分流
    switch (page) {
        case 'home':
            if (window.renderHome) window.renderHome(app, t);
            break;
        case 'product':
            if (window.renderProduct) window.renderProduct(app, t);
            break;
        case 'simulator':
            if (window.renderSimulator) window.renderSimulator(app, t);
            break;
        case 'science':
            if (window.renderScience) window.renderScience(app, t);
            break;
        case 'vision':
            if (window.renderVision) window.renderVision(app, t);
            break;
        case 'brand':
            if (window.renderBrand) window.renderBrand(app, t);
            break;
        case 'video':
            if (window.renderVideo) window.renderVideo(app, t);
            break;
        default:
            if (window.renderHome) window.renderHome(app, t);
            break;
    }

    // 7. 全域自動防護鎖：確保 DOM 渲染完畢後 100% 正確驅動 Lucide Icons 顯示
    setTimeout(() => {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
    }, 50);
};