import React, { useState } from 'react';

const ProfileForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ name: '', bio: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={() => onSubmit(formData)}>
            <input name="name" onChange={handleChange} placeholder="Name" required />
            <textarea name="bio" onChange={handleChange} placeholder="Bio" />
            <button type="submit">Save</button>
        </form>
    );
};

export default ProfileForm;