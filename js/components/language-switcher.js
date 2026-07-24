// 切換語系時同時更新導覽列與當前頁面
window.changeLanguage = function() {
    if (window.updateNavbarText) {
        window.updateNavbarText();
    }
    
    // 重新渲染當前分頁內容
    const currentPage = window.currentPage || 'home';
    if (window.navigate) {
        window.navigate(currentPage);
    }
};