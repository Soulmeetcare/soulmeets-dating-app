const messageServicePro = {
    sendMessage: (data) => fetch('/api/messages/send/pro', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }),
    getMessages: (conversationId) => fetch(`/api/messages/pro/${conversationId}`)
};
export default messageServicePro;