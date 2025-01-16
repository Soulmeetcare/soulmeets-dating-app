const eventServicePro = {
    createEvent: (data) => fetch('/api/events/create/pro', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }),
    joinEvent: (eventId) => fetch(`/api/events/join/pro/${eventId}`)
};
export default eventServicePro;