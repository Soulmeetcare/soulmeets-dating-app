import React from 'react';

const EventCard = ({ eventName, date }) => {
    return (
        <div className="event-card">
            <h3>{eventName}</h3>
            <p>Date: {date}</p>
        </div>
    );
};

export default EventCard;