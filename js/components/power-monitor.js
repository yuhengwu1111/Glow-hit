window.updatePowerCalculation = function() {
    let finalCurrent = 0;
    if (window.simMode === 'home') {
        const brightnessVal = parseInt(document.getElementById('briRange').value, 10);
        finalCurrent = Math.round(300 + brightnessVal * 6);
    } else {
        finalCurrent = 450;
    }
    const limitTriggered = finalCurrent > 2000;

    const curValText = document.getElementById('currentVal');
    const pBar = document.getElementById('loadProgressBar');
    const pPercent = document.getElementById('loadPercentVal');
    const pIndicator = document.getElementById('protectionIndicator');
    const pText = document.getElementById('protectionText');
    const t = window.translations[window.currentLang];

    if(curValText) {
        curValText.textContent = `${finalCurrent} mA`;
        const percentage = Math.min(100, Math.round((finalCurrent / 2000) * 100));
        pPercent.textContent = `${percentage}%`;
        pBar.style.width = `${percentage}%`;

        if(limitTriggered) {
            pBar.className = "h-full bg-orange-500 transition-all duration-300";
            pIndicator.className = "w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse";
            pText.textContent = t.statusLimit;
            pText.className = "font-semibold text-orange-600";
        } else {
            pBar.className = "h-full bg-emerald-500 transition-all duration-300";
            pIndicator.className = "w-2.5 h-2.5 rounded-full bg-emerald-500";
            pText.textContent = t.statusSafe;
            pText.className = "font-semibold text-emerald-600";
        }
    }
};