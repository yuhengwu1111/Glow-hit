document.addEventListener('DOMContentLoaded', function() {
    // 1. 初始化導覽列語系文字
    if (window.updateNavbarText) {
        window.updateNavbarText();
    }

    // 2. 預設導向首頁
    if (window.navigate) {
        window.navigate('home');
    }

    // 3. 觸發 Lucide 圖示生成
    setTimeout(() => {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
    }, 100);
});

// 手機版選單切換開關
window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobileMenu');
    if (!menu) return;
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(() => {
            menu.classList.remove('-translate-y-8', 'opacity-0');
        }, 10);
    } else {
        menu.classList.add('-translate-y-8', 'opacity-0');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 200);
    }
};