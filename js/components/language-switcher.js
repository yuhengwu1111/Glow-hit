window.changeLanguage = function() {
    window.currentLang = document.getElementById('langSelect').value;
    let activePage = 'home';
    document.querySelectorAll('.nav-link').forEach(el => {
        if (el.classList.contains('text-black')) {
            activePage = el.id.replace('nav-', '');
        }
    });
    window.navigate(activePage);
};

window.verifyTranslations = function() {
    const baseKeyLang = window.translations['zh-TW'] ? 'zh-TW' : Object.keys(window.translations)[0];
    const base = window.translations[baseKeyLang] || {};
    const keys = Object.keys(base);
    const report = {};
    Object.keys(window.translations).forEach(lang => {
        const t = window.translations[lang] || {};
        const missing = keys.filter(k => !(k in t));
        const identicalToBase = keys.filter(k => (k in t) && t[k] === base[k]);
        report[lang] = {
            總字串數: Object.keys(t).length,
            相對於_繁體缺少數: missing.length,
            與繁體相同數: identicalToBase.length
        };
    });
    console.log('Translations 驗證報告:', report);
    return report;
};

window.fillMissingSpanish = function() {
    if (!window.translations['es']) window.translations['es'] = {};
    const base = window.translations['zh-TW'] || {};
    const en = window.translations['en'] || {};
    const es = window.translations['es'];
    const filled = [];
    Object.keys(base).forEach(k => {
        if (!(k in es) || !es[k]) {
            es[k] = en[k] || base[k];
            filled.push({key: k, value: es[k]});
        }
    });
    return filled;
};