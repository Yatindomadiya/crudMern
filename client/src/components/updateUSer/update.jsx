import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Update = () => {


  const users = {
    fname: "",
    lname: "",
    email: "",
    password: ""
  }

  const { id } = useParams();
  const [user, setuser] = useState(users);

  const ohchangehandler = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value })
    console.log(user);
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/api/getOne/${id}`)
      .then((response) => {
        setuser(response.data);

      })
      .catch((e) => {
        console.log(e);
      })
  }, [id])

  const submithandler = async (e) => {
    e.preventDefault();
    await axios.put(`localhost:3000/api/update/${id}`, user)
      .then((response) => {
        // window.location.href('/')
      })
      .catch(er => console.log(er))
  }
  return (
    <div className='add_user'>
      <h3>Update User</h3>
      <div className='btns'>
        <Link to={'/'}>Back</Link>
        <button type='submit' onSubmit={submithandler}>Save</button>
      </div>
      <div className='container'>

        <form className='form_class'>
          <label>First name</label>
          <input type='text' onChange={ohchangehandler} value={user.fname}></input>
          <label>Last Name</label>
          <input type='text' onChange={ohchangehandler} value={user.lname}></input>
          <label>Email</label>
          <input type='email' onChange={ohchangehandler} value={user.email}></input>
          <label>Password</label>
          <input type='password' onChange={ohchangehandler} value={user.password}></input>

        </form>
      </div>
    </div>
  );
}

export default Update;
