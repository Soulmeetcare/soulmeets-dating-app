const gamificationServicePro = {
    getAchievements: (userId) => fetch(`/api/gamification/pro/${userId}`)
};
export default gamificationServicePro;