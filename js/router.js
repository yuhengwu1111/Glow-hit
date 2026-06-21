window.navigate = function(page) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('text-black', 'font-semibold');
        el.classList.add('text-gray-500');
    });
    const activeNav = document.getElementById(`nav-${page}`);
    if (activeNav) {
        activeNav.classList.remove('text-gray-500');
        activeNav.classList.add('text-black', 'font-semibold');
    }

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

    // 同步更新全域 Navbar 多國語系文字
    document.getElementById('nav-home').textContent = t.navHome;
    document.getElementById('nav-product').textContent = t.navProduct;
    document.getElementById('nav-simulator').textContent = t.navSimulator;
    document.getElementById('nav-science').textContent = t.navScience;
    document.getElementById('nav-about').textContent = t.navAbout;
    document.getElementById('globalCtaBtn').textContent = t.navTry;

    // 同步更新全域行動端選單文字
    document.getElementById('mob-nav-home').textContent = t.navHome;
    document.getElementById('mob-nav-product').textContent = t.navProduct;
    document.getElementById('mob-nav-simulator').textContent = t.navSimulator;
    document.getElementById('mob-nav-science').textContent = t.navScience;
    document.getElementById('mob-nav-about').textContent = t.navAbout;

    // 同步更新頁尾基礎資訊
    document.getElementById('footerTitle').textContent = t.footerTitle;
    document.getElementById('footerCopyright').textContent = t.footerCopyright;
    document.getElementById('footerLink1').textContent = t.footerLink1;
    document.getElementById('footerLink2').textContent = t.footerLink2;
    document.getElementById('footerLink3').textContent = t.footerLink3;

    // 分流渲染對應頁面
    switch(page) {
        case 'home': window.renderHome(app, t); break;
        case 'product': window.renderProduct(app, t); break;
        case 'simulator': window.renderSimulator(app, t); break;
        case 'science': window.renderScience(app, t); break;
        case 'about': window.renderAbout(app, t); break;
        default: window.renderHome(app, t);
    }
    lucide.createIcons();
};

window.setSimMode = function(mode) {
    window.simMode = mode;
    const t = window.translations[window.currentLang];
    document.querySelectorAll('[id^="tab-"]').forEach(btn => {
        btn.classList.remove('bg-white', 'text-black', 'shadow-sm');
        btn.classList.add('text-gray-500');
    });
    const activeTab = document.getElementById(`tab-${mode}`);
    if(activeTab) {
        activeTab.classList.add('bg-white', 'text-black', 'shadow-sm');
        activeTab.classList.remove('text-gray-500');
    }

    const startBtn = document.getElementById('startGameBtn');
    const homePanel = document.getElementById('homeControlPanel');
    const dash = document.getElementById('gameDashboard');

    if(window.gameInterval) {
        clearInterval(window.gameInterval);
        window.gameInterval = null;
    }
    window.gameScore = 0;
    window.totalHits = 0;
    window.reactionSum = 0;
    window.gameTimeLeft = 30;
    window.targetId = null;

    if (mode === 'home') {
        if(startBtn) startBtn.classList.add('hidden');
        if(homePanel) homePanel.classList.remove('hidden');
        if(dash) dash.classList.add('opacity-40');
        window.initAmbientWall();
        window.updateHomeColor();
    } else {
        if(startBtn) {
            startBtn.classList.remove('hidden');
            startBtn.textContent = t.startBtnText;
        }
        if(homePanel) homePanel.classList.add('hidden');
        if(dash) dash.classList.remove('opacity-40');
        document.getElementById('scoreVal').textContent = '0';
        document.getElementById('timeVal').textContent = '30s';
        document.getElementById('reactVal').textContent = `0${t.ms}`;
        window.initSimWall();
    }
    lucide.createIcons();
};