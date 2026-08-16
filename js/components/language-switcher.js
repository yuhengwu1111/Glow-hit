// 🌐 智慧辨識瀏覽器語言
function detectBrowserLanguage() {
    const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
    
    for (let rawLang of browserLangs) {
        if (!rawLang) continue;
        const lang = rawLang.toLowerCase();

        // 1. 繁體中文判斷 (台灣 TW、香港 HK、澳門 MO、繁體 Hant)
        if (lang.includes('tw') || lang.includes('hk') || lang.includes('mo') || lang.includes('hant')) {
            return 'zh-TW';
        }
        // 2. 簡體中文判斷 (中國 CN、新加坡 SG、簡體 Hans、一般 zh)
        if (lang.includes('cn') || lang.includes('sg') || lang.includes('hans') || lang === 'zh') {
            return 'zh-CN';
        }
        // 3. 各國語言前綴比對
        if (lang.startsWith('ja')) return 'ja'; // 日本語
        if (lang.startsWith('ko')) return 'ko'; // 韓國語
        if (lang.startsWith('es')) return 'es'; // 西班牙語
        if (lang.startsWith('fr')) return 'fr'; // 法語
        if (lang.startsWith('de')) return 'de'; // 德語
        if (lang.startsWith('pt')) return 'pt'; // 葡萄牙語
        if (lang.startsWith('ar')) return 'ar'; // 阿拉伯語
        if (lang.startsWith('en')) return 'en'; // 英語
    }

    return 'zh-TW'; // 預設語言
}

// 每次重新整理(F5) 或進入網頁時，都強制讀取瀏覽器真實語言 (不再使用 localStorage 記憶)
window.getInitialLanguage = function() {
    // 主動清除舊版的記憶，確保不會被干擾
    localStorage.removeItem('glowhit_lang');
    return detectBrowserLanguage();
};

// 立即設定全域當前語言
window.currentLang = window.getInitialLanguage();

// 使用者手動切換語言 (僅在當前頁面操作中生效，重整即重置)
window.changeLanguage = function() {
    const langSelect = document.getElementById('langSelect');
    const selectedLang = langSelect ? langSelect.value : window.currentLang;
    
    window.currentLang = selectedLang;
    document.documentElement.lang = selectedLang;

    if (typeof window.updateNavbarText === 'function') {
        window.updateNavbarText();
    }
    if (typeof window.navigate === 'function') {
        window.navigate(window.currentPage || 'home');
    }
};

// 頁面載入完成時，同步下拉選單的初始選取值為瀏覽器語言
document.addEventListener('DOMContentLoaded', () => {
    const initialLang = window.getInitialLanguage();
    window.currentLang = initialLang;
    
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = initialLang;
    }
    document.documentElement.lang = initialLang;
});