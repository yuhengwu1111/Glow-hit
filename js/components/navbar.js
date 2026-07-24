window.updateNavbarText = function() {
    const langSelect = document.getElementById('langSelect');
    const langKey = langSelect ? langSelect.value : 'zh-TW';
    const t = window.translations[langKey] || window.translations.zh || window.translations.en;

    const navMap = {
        'nav-home': t.navHome || '首頁',
        'nav-product': t.navProduct || '產品解構',
        'nav-simulator': t.navSimulator || '互動控制台',
        'nav-vision': t.navVision || '核心初衷',
        'nav-brand': t.navBrand || '品牌理念',
        'nav-video': t.navVideo || '形象影片',
        
        'mob-nav-home': t.navHome || '首頁',
        'mob-nav-product': t.navProduct || '產品解構',
        'mob-nav-simulator': t.navSimulator || '互動控制台',
        'mob-nav-vision': t.navVision || '核心初衷',
        'mob-nav-brand': t.navBrand || '品牌理念',
        'mob-nav-video': t.navVideo || '形象影片',

        'globalCtaBtn': t.navTry || '試玩體驗'
    };

    for (const [id, text] of Object.entries(navMap)) {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    }

    if (document.getElementById('footerTitle') && t.footerTitle) {
        document.getElementById('footerTitle').innerText = t.footerTitle;
    }
};