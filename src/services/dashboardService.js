const dashboardServicePro = {
    getDashboardData: (userId) => fetch(`/api/dashboard/pro/${userId}`)
};
export default dashboardServicePro;