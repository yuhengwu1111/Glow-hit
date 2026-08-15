window.currentPage = 'home';
window.currentLang = 'zh-TW';

window.navigate = function(page) {
    window.currentPage = page || 'home';
    const app = document.getElementById('app');
    if (!app) return;
    
    // 1. 抓取當前語言字典（強化大小寫相容與 Fallback）
    const langSelect = document.getElementById('langSelect');
    const langKey = langSelect ? langSelect.value : (window.currentLang || 'zh-TW');
    window.currentLang = langKey;

    const t = window.translations[langKey] 
           || window.translations[langKey.toLowerCase()] 
           || window.translations['zh-TW'] 
           || window.translations['en'] 
           || {};

    // 2. 切換分頁時，強制停止後台計時器與進行中的遊戲
    if (window.GlowHitEngine && window.GlowHitEngine.isActive) {
        window.GlowHitEngine.endGame();
    }
    if (window.gameInterval) {
        clearInterval(window.gameInterval);
        window.gameInterval = null;
    }

    // 3. 即時同步導覽列與頁尾多語系文字
    if (typeof window.updateNavbarText === 'function') {
        window.updateNavbarText();
    }
    if (typeof window.updateFooterText === 'function') {
        window.updateFooterText();
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

    // 5. 視窗平滑捲動至頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 📊 發送單頁虛擬頁面切換事件給 GA4
    if (typeof gtag === 'function') {
        gtag('event', 'page_view', {
            page_title: page,
            page_path: '/Glow-hit/' + page,
            page_location: window.location.origin + window.location.pathname + '#' + page
        });
    }

    // 6. 頁面渲染分流
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

    // 7. 確保 Lucide Icons 渲染
    setTimeout(() => {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
    }, 50);
};