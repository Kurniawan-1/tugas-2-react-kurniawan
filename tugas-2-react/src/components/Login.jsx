import React from 'react';
import KotakTeks from './KotakTeks';
import Tombol from './Tombol';

const Login = () => {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <KotakTeks id="email" type="email" jenis="email"/>
            <label htmlFor="password">Password:</label>
            <KotakTeks id="password" type="password" jenis="password"/>
            <Tombol>Login</Tombol>
        </form>
    );
};

export default Login;