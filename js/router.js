window.navigate = function(page) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // 清除桌面端高亮
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('text-black', 'font-semibold');
        el.classList.add('text-gray-500');
    });
    const activeNav = document.getElementById(`nav-${page}`);
    if (activeNav) {
        activeNav.classList.remove('text-gray-500');
        activeNav.classList.add('text-black', 'font-semibold');
    }

    // 清除行動端 Drawer 高亮
    document.querySelectorAll('.mob-nav-link').forEach(el => {
        el.classList.remove('text-black', 'font-semibold');
        el.classList.add('text-gray-500');
    });
    const activeMobNav = document.getElementById(`mob-nav-${page}`);
    if (activeMobNav) {
        activeMobNav.classList.remove('text-gray-500');
        activeMobNav.classList.add('text-black', 'font-semibold');
    }

    const app = document.getElementById('app');
    const t = window.translations[window.currentLang];

    // 同步更新全域 Navbar 語系文字（包含新頁面）
    document.getElementById('nav-home').textContent = t.navHome;
    document.getElementById('nav-product').textContent = t.navProduct;
    document.getElementById('nav-simulator').textContent = t.navSimulator;
    document.getElementById('nav-vision').textContent = t.navVision; // 新頁面
    document.getElementById('nav-science').textContent = t.navScience;
    document.getElementById('nav-about').textContent = t.navAbout;
    document.getElementById('globalCtaBtn').textContent = t.navTry;

    document.getElementById('mob-nav-home').textContent = t.navHome;
    document.getElementById('mob-nav-product').textContent = t.navProduct;
    document.getElementById('mob-nav-simulator').textContent = t.navSimulator;
    document.getElementById('mob-nav-vision').textContent = t.navVision; // 新頁面
    document.getElementById('mob-nav-science').textContent = t.navScience;
    document.getElementById('mob-nav-about').textContent = t.navAbout;

    // 頁尾更新
    document.getElementById('footerTitle').textContent = t.footerTitle;
    document.getElementById('footerCopyright').textContent = t.footerCopyright;
    document.getElementById('footerLink1').textContent = t.footerLink1;
    document.getElementById('footerLink2').textContent = t.footerLink2;
    document.getElementById('footerLink3').textContent = t.footerLink3;

    switch(page) {
        case 'home': window.renderHome(app, t); break;
        case 'product': window.renderProduct(app, t); break;
        case 'simulator': window.renderSimulator(app, t); break;
        case 'vision': window.renderVision(app, t); break; // 渲染新分頁
        case 'science': window.renderScience(app, t); break;
        case 'about': window.renderAbout(app, t); break;
        default: window.renderHome(app, t);
    }
    lucide.createIcons();
};