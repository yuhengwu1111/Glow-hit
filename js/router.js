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

    // 全域語系字串同步更新
    if (document.getElementById('nav-home')) document.getElementById('nav-home').textContent = t.navHome;
    if (document.getElementById('nav-product')) document.getElementById('nav-product').textContent = t.navProduct;
    if (document.getElementById('nav-simulator')) document.getElementById('nav-simulator').textContent = t.navSimulator;
    if (document.getElementById('nav-vision')) document.getElementById('nav-vision').textContent = t.navVision;
    if (document.getElementById('nav-science')) document.getElementById('nav-science').textContent = t.navScience;
    if (document.getElementById('nav-about')) document.getElementById('nav-about').textContent = t.navAbout;
    if (document.getElementById('globalCtaBtn')) document.getElementById('globalCtaBtn').textContent = t.navTry;

    if (document.getElementById('mob-nav-home')) document.getElementById('mob-nav-home').textContent = t.navHome;
    if (document.getElementById('mob-nav-product')) document.getElementById('mob-nav-product').textContent = t.navProduct;
    if (document.getElementById('mob-nav-simulator')) document.getElementById('mob-nav-simulator').textContent = t.navSimulator;
    if (document.getElementById('mob-nav-vision')) document.getElementById('mob-nav-vision').textContent = t.navVision;
    if (document.getElementById('mob-nav-science')) document.getElementById('mob-nav-science').textContent = t.navScience;
    if (document.getElementById('mob-nav-about')) document.getElementById('mob-nav-about').textContent = t.navAbout;

    if (document.getElementById('footerTitle')) document.getElementById('footerTitle').textContent = t.footerTitle;
    if (document.getElementById('footerCopyright')) document.getElementById('footerCopyright').textContent = t.footerCopyright;
    if (document.getElementById('footerLink1')) document.getElementById('footerLink1').textContent = t.footerLink1;
    if (document.getElementById('footerLink2')) document.getElementById('footerLink2').textContent = t.footerLink2;
    if (document.getElementById('footerLink3')) document.getElementById('footerLink3').textContent = t.footerLink3;

    switch(page) {
        case 'home': window.renderHome(app, t); break;
        case 'product': window.renderProduct(app, t); break;
        case 'simulator': window.renderSimulator(app, t); break;
        case 'vision': window.renderVision(app, t); break;
        case 'science': window.renderScience(app, t); break;
        case 'about': window.renderAbout(app, t); break;
        default: window.renderHome(app, t);
    }
    lucide.createIcons();
};

window.setSimMode = function(mode) {
    window.simMode = mode;
    const t = window.translations[window.currentLang];
    
    // 同步更新 UI Tab 按鈕樣式
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

    // 重置定時器與局數狀態
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
        // ✨ 【核心修正點】補上正確的 .classList 方法，阻斷控制台編譯錯誤
        if(homePanel) homePanel.classList.add('hidden'); 
        if(dash) dash.classList.remove('opacity-40');
        
        // 安全重置儀表板數據
        const sVal = document.getElementById('scoreVal');
        const tVal = document.getElementById('timeVal');
        const rVal = document.getElementById('reactVal');
        if (sVal) sVal.textContent = '0';
        if (tVal) tVal.textContent = '30s';
        if (rVal) rVal.textContent = `0${t.ms}`;
        
        window.initSimWall();
    }
    lucide.createIcons();
};