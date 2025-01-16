import React from 'react';

const SignUp = () => (
    <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
    </form>
);
export default SignUp;