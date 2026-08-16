// 核心路由控制器
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
    
    // 平滑回到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const app = document.getElementById('app');
    const langKey = window.currentLang || 'zh-TW';
    const t = window.translations?.[langKey] || window.translations?.['zh-TW'] || {};

    // 渲染目標頁面
    routes[pageName](app, t);

    // 更新導覽列高亮狀態 (僅對頂部 6 個項目高亮)
    const navItems = ['home', 'product', 'simulator', 'vision', 'brand', 'video'];
    navItems.forEach(item => {
        const deskLink = document.getElementById(`nav-${item}`);
        const mobLink = document.getElementById(`mob-nav-${item}`);
        if (deskLink) {
            if (item === pageName) {
                deskLink.className = "nav-link text-black font-bold transition cursor-pointer";
            } else {
                deskLink.className = "nav-link text-gray-500 hover:text-black transition cursor-pointer";
            }
        }
        if (mobLink) {
            if (item === pageName) {
                mobLink.className = "mob-nav-link text-indigo-600 font-bold py-2 border-b border-gray-100";
            } else {
                mobLink.className = "mob-nav-link text-gray-600 py-2 border-b border-gray-100";
            }
        }
    });

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

// 初始進入網頁
document.addEventListener('DOMContentLoaded', () => {
    window.navigate('home');
});