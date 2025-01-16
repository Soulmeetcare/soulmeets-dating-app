import React from 'react';

const ProfileVerificationBadge = ({ isVerified }) => {
    return (
        <div className="profile-verification-badge">
            {isVerified ? '✅ Verified' : '❌ Not Verified'}
        </div>
    );
};

export default ProfileVerificationBadge;