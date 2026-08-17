window.currentPage = 'home';

const routes = {
    home: window.renderHome,
    product: window.renderProduct,
    simulator: window.renderSimulator,
    vision: window.renderVision,
    brand: window.renderBrand,
    video: window.renderVideo,
    sponsor: window.renderSponsor
};

window.navigate = function(pageName) {
    if (!routes[pageName]) pageName = 'home';
    window.currentPage = pageName;
    
    // 平滑捲動至頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const app = document.getElementById('app');
    const langKey = window.currentLang || 'zh-TW';
    const t = window.translations?.[langKey] || window.translations?.['zh-TW'] || {};

    // 渲染當前頁面
    routes[pageName](app, t);

    // 同步觸發 GA4 頁面瀏覽事件 (SPA 路由追蹤)
    if (typeof gtag === 'function') {
        gtag('event', 'page_view', {
            page_title: pageName,
            page_location: window.location.href,
            page_path: '/' + pageName
        });
    }

    // 導覽列高亮切換
    const navItems = ['home', 'product', 'simulator', 'vision', 'brand', 'video'];
    navItems.forEach(item => {
        const deskLink = document.getElementById(`nav-${item}`);
        const mobLink = document.getElementById(`mob-nav-${item}`);
        if (deskLink) {
            deskLink.className = (item === pageName)
                ? "nav-link text-black font-bold transition cursor-pointer"
                : "nav-link text-gray-500 hover:text-black transition cursor-pointer";
        }
        if (mobLink) {
            mobLink.className = (item === pageName)
                ? "mob-nav-link text-indigo-600 font-bold py-2 border-b border-gray-100"
                : "mob-nav-link text-gray-600 py-2 border-b border-gray-100";
        }
    });

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

document.addEventListener('DOMContentLoaded', () => {
    window.navigate('home');
});