// 頂部導覽列與頁尾多國語言文字同步
window.updateNavbarText = function() {
    const langKey = window.currentLang || 'zh-TW';
    const t = window.translations?.[langKey] || window.translations?.['zh-TW'] || {};
    
    // 頂部 6 大頁面
    const navItems = ['home', 'product', 'simulator', 'vision', 'brand', 'video'];
    navItems.forEach(item => {
        const text = t[`nav${item.charAt(0).toUpperCase() + item.slice(1)}`] || item;
        const desk = document.getElementById(`nav-${item}`);
        const mob = document.getElementById(`mob-nav-${item}`);
        if (desk) desk.textContent = text;
        if (mob) mob.textContent = text;
    });

    // 右上角試玩體驗按鈕
    const cta = document.getElementById('globalCtaBtn');
    if (cta) cta.textContent = t.navTry || '試玩體驗';

    // 頁尾小連結翻譯同步
    const fLink1 = document.getElementById('footer-link1');
    const fLink2 = document.getElementById('footer-link2');
    const fLink3 = document.getElementById('footer-link3');
    const fSponsor = document.getElementById('footer-sponsor');
    const fTitle = document.getElementById('footer-title');
    const fCopy = document.getElementById('footer-copyright');

    if (fLink1) fLink1.textContent = t.footerLink1 || '產品解構';
    if (fLink2) fLink2.textContent = t.footerLink2 || '運動科學';
    if (fLink3) fLink3.textContent = t.footerLink3 || '核心初衷';
    if (fSponsor) fSponsor.textContent = t.footerSponsor || '贊助夥伴';
    if (fTitle) fTitle.textContent = t.footerTitle || 'GlowHit 智慧模組化光點反應牆專案';
    if (fCopy) fCopy.textContent = t.footerCopyright || '© 2026 Glowhit. 保留所有權利。';
};

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('hidden');
};