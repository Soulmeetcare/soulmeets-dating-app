import React from 'react';

const SignIn = () => (
    <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
    </form>
);
export default SignIn;