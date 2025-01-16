const profileServicePro = {
    getProfile: (userId) => fetch(`/api/profile/pro/${userId}`),
    updateProfile: (userId, data) => fetch(`/api/profile/pro/${userId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
};
export default profileServicePro;