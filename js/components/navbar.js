window.isMobileMenuOpen = false;

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobileMenu');
    const container = document.getElementById('menuIconContainer');
    window.isMobileMenuOpen = !window.isMobileMenuOpen;
    
    if (window.isMobileMenuOpen) {
        menu.classList.remove('hidden');
        setTimeout(() => {
            menu.classList.remove('-translate-y-8', 'opacity-0');
            menu.classList.add('translate-y-0', 'opacity-100');
        }, 10);
        // 修正點：清空容器並重建原始 <i> 標籤，讓 Lucide 能夠重新識別並渲染成 X 圖標
        if (container) container.innerHTML = `<i data-lucide="x" class="w-6 h-6"></i>`;
    } else {
        menu.classList.remove('translate-y-0', 'opacity-100');
        menu.classList.add('-translate-y-8', 'opacity-0');
        setTimeout(() => {
            if (!window.isMobileMenuOpen) {
                menu.classList.add('hidden');
            }
        }, 300);
        // 修正點：還原為漢堡選單圖標
        if (container) container.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
    }
    lucide.createIcons();
};