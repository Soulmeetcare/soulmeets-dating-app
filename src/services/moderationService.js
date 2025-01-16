const moderationServicePro = {
    reportContent: (data) => fetch('/api/moderation/report/pro', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
};
export default moderationServicePro;