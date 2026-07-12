window.setHomeKitSimTab = function() {
    window.navigate('simulator');
    setTimeout(() => {
        window.setSimMode('home');
    }, 50);
};

window.updateHomeColor = function() {
    const h = document.getElementById('hueRange').value;
    const s = document.getElementById('satRange').value;
    const b = document.getElementById('briRange').value;
    const temp = document.getElementById('tempRange').value;

    document.getElementById('hueText').textContent = `${h}°`;
    document.getElementById('satText').textContent = `${s}%`;
    document.getElementById('briText').textContent = `${b}%`;
    document.getElementById('tempText').textContent = `${temp}K`;

    for(let i=0; i<9; i++) {
        const inner = document.getElementById(`inner-pad-${i}`);
        const parent = document.getElementById(`pad-${i}`);
        if(inner && parent) {
            const colorString = `hsl(${h}, ${s}%, ${b * 0.8}%)`;
            inner.style.backgroundColor = colorString;
            parent.style.boxShadow = `0 0 ${b * 0.3}px ${colorString}`;
        }
    }
    window.updatePowerCalculation();
};