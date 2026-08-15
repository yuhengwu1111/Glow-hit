// 🔗 已更新為你的最新 Google Apps Script Web App URL
const GAS_URL = "https://script.google.com/macros/s/AKfycbxRMZw_MYS3CisvCx61KLsKgjQp7G5iTONzKJJVXvJ7HffBVUNGA6Oxy_VinKINS-JQzw/exec";

window.LeaderboardService = {
    // 依模式讀取前 10 名 (speed 或 color)
    async getTopScores(mode = 'speed') {
        try {
            const res = await fetch(`${GAS_URL}?mode=${encodeURIComponent(mode)}`);
            return await res.json();
        } catch (error) {
            console.error(`讀取 [${mode}] 排行榜失敗:`, error);
            return [];
        }
    },

    // 上傳分數、反應時間、國家與模式 (寫入 A~G 7個欄位)
    async submitScore(playerName, country, score, reactTime, mode = 'speed') {
        try {
            await fetch(GAS_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: playerName.trim() || '神秘挑戰者',
                    country: country || 'TW',
                    score: Number(score),
                    reactTime: Number(reactTime),
                    device: '網頁',
                    mode: mode
                })
            });
            return true;
        } catch (error) {
            console.error("上傳至 Google Sheet 失敗:", error);
            return false;
        }
    }
};