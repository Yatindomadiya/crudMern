import React, { useState } from 'react';
import axios from 'axios';
import '../registration/registration.css'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/login', { Username: username, Password: password });
            if (response.data.success) {
                // Authentication successful, handle success scenario
            } else {
                setError(response.data.error);
            }
        } catch (error) {
            setError('An error occurred during login');
        }
    };

    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {error && <div>{error}</div>}
        </div>
    );
};

export default LoginForm;
