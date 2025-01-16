const moodServicePro = {
    getMoodMatches: (data) => fetch('/api/mood/matches/pro', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
};
export default moodServicePro;