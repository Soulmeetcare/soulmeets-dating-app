const userSafetyServicePro = {
    blockUser: (userId) => fetch(`/api/safety/block/pro/${userId}`, { method: 'POST' })
};
export default userSafetyServicePro;