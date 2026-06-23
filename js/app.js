// 預設全域語系（若完全不支援則以此為底）
window.currentLang = 'en'; 

/**
 * 智慧偵測瀏覽器語系並進行相容性匹配
 * @returns {string} 匹配成功的語系代碼
 */
function autoDetectBrowserLanguage() {
    // 當前網站確切支援的語系清單（需對齊 index.html 的 select option value）
    const supportedLangs = ['zh-TW', 'en', 'zh-CN', 'es', 'ja', 'ko', 'fr', 'de', 'pt', 'ar'];
    const defaultFallback = 'en';
    
    // 取得瀏覽器偏好的首選語系 (例如: "zh-TW", "en-US", "ja-JP", "ru")
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (!browserLang) return defaultFallback;

    // 1. 第一層：完全比對 (剛好瀏覽器傳回 zh-TW, zh-CN, en 等精準字串)
    if (supportedLangs.includes(browserLang)) {
        return browserLang;
    }

    const lowerLang = browserLang.toLowerCase();

    // 2. 第二層：中文家族 (zh) 特殊子標籤智慧分流
    if (lowerLang.startsWith('zh')) {
        // 包含 cn(大陸)、sg(新加坡) 或 hans(簡體) 則判定為簡體中文
        if (lowerLang.includes('cn') || lowerLang.includes('sg') || lowerLang.includes('hans')) {
            return 'zh-CN';
        }
        // 其餘（如 zh-HK 港澳、zh-MO）統一高相容性導向繁體中文
        return 'zh-TW'; 
    }

    // 3. 第三層：去除地區後綴比對主語系 (例如 "en-US" 拆出 "en"、"ja-JP" 拆出 "ja")
    const mainLangPrefix = lowerLang.split('-')[0];
    const matchedLang = supportedLangs.find(lang => lang.toLowerCase().startsWith(mainLangPrefix));
    
    // 4. 第四層：若瀏覽器語系完全不在支援範圍內（例如俄文 ru），安全回退至英文 default
    return matchedLang || defaultFallback;
}

window.onload = function() {
    // 執行自動語系偵測
    window.currentLang = autoDetectBrowserLanguage();
    
    // 將導覽列上的下拉選單 (langSelect) 的選取值，同步修正為偵測到的語系
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = window.currentLang;
    }

    // 調度全域路由驅動引擎，載入首頁並渲染多國語系字串與 Lucide 圖標
    window.navigate('home');
};