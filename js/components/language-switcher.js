// 全域語言切換處理函式
window.changeLanguage = function() {
    const langSelect = document.getElementById('langSelect');
    const selectedLang = langSelect ? langSelect.value : 'zh-TW';
    
    // 1. 記錄偏好設定至全域與 LocalStorage
    window.currentLang = selectedLang;
    localStorage.setItem('glowhit_lang', selectedLang);

    // 2. 更新 HTML 標籤語言屬性
    document.documentElement.lang = selectedLang;

    // 3. 更新導覽列與頁尾多語系文字
    if (typeof window.updateNavbarText === 'function') {
        window.updateNavbarText();
    }
    if (typeof window.updateFooterText === 'function') {
        window.updateFooterText();
    }
    
    // 4. 重新渲染當前所在分頁
    const currentPage = window.currentPage || 'home';
    if (typeof window.navigate === 'function') {
        window.navigate(currentPage);
    }
};

// 頁面初次載入時自動讀取語言偏好
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('glowhit_lang') || 'zh-TW';
    window.currentLang = savedLang;
    
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = savedLang;
    }
    
    document.documentElement.lang = savedLang;
});