import React, { useState } from 'react';
import axios from 'axios';
import './registration.css';

const Registration = () => {
    const [user, setUser] = useState({
        Username: '',
        Email: '',
        Password: '',
        confirmPass: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let responce = await axios.post('http://localhost:3000/register', user);
            console.log(responce)
            console.log('Registration successful');
            setUser({
                Username: '',
                Email: '',
                Password: '',
                confirmPass: '',
            });
        } catch (err) {
            console.log('Registration failed:', err);
        }
    }

    return (
        <div className='container'>
            <center style={{ fontWeight: "bold" }}>Registration</center>
            <form className='form_property' onSubmit={handleSubmit}>
                <label>User Name </label>
                <input type='text' name='Username' value={user.Username} onChange={handleChange} />
                <label>E-mail</label>
                <input type='text' name='Email' value={user.Email} onChange={handleChange} />
                <label>Password</label>
                <input type='password' name='Password' value={user.Password} onChange={handleChange} />
                <label>Confirm password</label>
                <input type='password' name='confirmPass' value={user.confirmPass} onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;
