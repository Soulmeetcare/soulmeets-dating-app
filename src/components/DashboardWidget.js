import React from 'react';

const DashboardWidget = ({ statName, value }) => {
    return (
        <div className="dashboard-widget">
            <h3>{statName}</h3>
            <p>{value}</p>
        </div>
    );
};

export default DashboardWidget;