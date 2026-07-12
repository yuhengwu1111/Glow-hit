window.audioCtx = null;
window.gameInterval = null;
window.gameScore = 0;
window.gameTimeLeft = 30;
window.targetId = null;
window.targetColor = 'blue';
window.speedTimer = 0;
window.reactionSum = 0;
window.totalHits = 0;

window.playSound = function(type) {
    if (!window.audioCtx) {
        window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const now = window.audioCtx.currentTime;
    if (window.audioCtx.state === 'suspended') {
        window.audioCtx.resume();
    }
    const osc = window.audioCtx.createOscillator();
    const gain = window.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(window.audioCtx.destination);

    if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.15);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'hit') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    } else if (type === 'fail') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(80, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
};

window.toggleGame = function() {
    const startBtn = document.getElementById('startGameBtn');
    const t = window.translations[window.currentLang];
    if (window.gameInterval) {
        clearInterval(window.gameInterval);
        window.gameInterval = null;
        startBtn.textContent = t.startBtnText;
        window.initSimWall();
    } else {
        window.gameScore = 0;
        window.gameTimeLeft = 30;
        window.totalHits = 0;
        window.reactionSum = 0;
        document.getElementById('scoreVal').textContent = '0';
        document.getElementById('timeVal').textContent = '30s';
        document.getElementById('reactVal').textContent = `0${t.ms}`;
        startBtn.textContent = t.stopBtnText;
        window.playSound('success');
        window.nextTarget();
        
        window.gameInterval = setInterval(() => {
            window.gameTimeLeft--;
            document.getElementById('timeVal').textContent = `${window.gameTimeLeft}s`;
            if(window.gameTimeLeft <= 0) {
                clearInterval(window.gameInterval);
                window.gameInterval = null;
                startBtn.textContent = t.startBtnText;
                window.alertGameResult();
            }
        }, 1000);
    }
};

window.nextTarget = function() {
    if (window.targetId !== null) {
        const prevPad = document.getElementById(`pad-${window.targetId}`);
        if(prevPad) prevPad.style.backgroundColor = '#d1d5db';
    }
    window.targetId = Math.floor(Math.random() * 9);
    const nextPad = document.getElementById(`pad-${window.targetId}`);
    
    if (window.simMode === 'speed') {
        window.targetColor = 'blue';
        if(nextPad) nextPad.style.backgroundColor = '#38bdf8';
    } else if (window.simMode === 'color') {
        window.targetColor = Math.random() < 0.7 ? 'blue' : 'red';
        if(nextPad) nextPad.style.backgroundColor = window.targetColor === 'blue' ? '#38bdf8' : '#ef4444';
    }
    window.speedTimer = performance.now();
    window.updatePowerCalculation();
};

window.hitPad = function(id) {
    if (!window.gameInterval) return;
    if (id !== window.targetId) return;
    const duration = Math.round(performance.now() - window.speedTimer);
    const t = window.translations[window.currentLang];

    if (window.simMode === 'speed') {
        window.gameScore += 10;
        window.totalHits++;
        window.reactionSum += duration;
        window.playSound('hit');
        document.getElementById('scoreVal').textContent = window.gameScore;
        document.getElementById('reactVal').textContent = `${Math.round(window.reactionSum / window.totalHits)}${t.ms}`;
        window.nextTarget();
    } else if (window.simMode === 'color') {
        if (window.targetColor === 'blue') {
            window.gameScore += 15;
            window.totalHits++;
            window.reactionSum += duration;
            window.playSound('hit');
        } else {
            window.gameScore = Math.max(0, window.gameScore - 20);
            window.playSound('fail');
        }
        document.getElementById('scoreVal').textContent = window.gameScore;
        if(window.totalHits > 0) {
            document.getElementById('reactVal').textContent = `${Math.round(window.reactionSum / window.totalHits)}${t.ms}`;
        }
        window.nextTarget();
    }
};

window.alertGameResult = function() {
    window.playSound('success');
    const t = window.translations[window.currentLang];
    const avg = window.totalHits > 0 ? Math.round(window.reactionSum / window.totalHits) : 0;
    alert(`${t.alertEnd}\n${t.alertScore}${window.gameScore}\n${t.alertAvgReact}${avg} ${t.ms}\n${t.alertHits}${window.totalHits}`);
    window.initSimWall();
};