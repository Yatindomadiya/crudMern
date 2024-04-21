import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Add.css';
import axios from 'axios';


const Adduser = () => {

  const users = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  }
  const [user, setuser] = useState(users)

  const inchange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value })
    console.log(user);

  }

  const frmsubmited = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/api/create", user)
      .then(() => {
      })
      .catch((err) => {
        console.log(err);
      })
    window.location.href = '/';
    
  }

  return (
    <div className='add_user'>
      <h3>Add new User</h3>
      <div className='btns'>
        <Link to={'/'}>Back</Link>
        <button type='submit' onClick={frmsubmited}>Save</button>
      </div>
      <div className='container'>
        <form className='form_class'>
          <label>First name</label>
          <input type='text' name='fname' placeholder='Enter firstname' onChange={inchange}></input>
          <label>Last Name</label>
          <input typpe='lname' name='lname' placeholder='Enter lastname' onChange={inchange}></input>
          <label>Email</label>
          <input type='email' name='email' placeholder='Enter email' onChange={inchange}></input>
          <label>Password</label>
          <input type='password' name='password' placeholder='Enter password' onChange={inchange}></input>
        </form>
      </div>
    </div>
  );
}
export default Adduser;
