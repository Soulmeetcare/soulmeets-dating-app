const notificationServicePro = {
    sendNotification: (data) => fetch('/api/notifications/send/pro', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
};
export default notificationServicePro;