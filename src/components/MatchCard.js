import React from 'react';

const MatchCard = ({ name, age, photo }) => {
    return (
        <div className="match-card">
            <img src={photo} alt={name} />
            <h3>{name}, {age}</h3>
        </div>
    );
};

export default MatchCard;