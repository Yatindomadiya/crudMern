import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../getUser/user.css'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import axios from 'axios';

const User = () => {

  const [user, setuser] = useState([]);

  const handledelet = async (id) => {
    await axios.delete(`http://localhost:3000/api/userdelete/${id}`);
    window.location.reload()
  }

  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/getAll")
      setuser(response.data);
    }
    fetchData()
  }, [])


  return (
    <div className='User_table'>
      <Link to={'/add'} className='addButton'>Add user</Link>
      <table cellPadding={2} cellSpacing={0} border={2}>
        <thead>

          <tr>
            <th>S.no</th>
            <th>user name</th>
            <th>user email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users, index) => {
            return (
              <tr key={users._id}>
                <td>{index}</td>
                <td>{users.fname} {users.lname}</td>
                <td>{users.email}</td>
                <td className='action'>
                  <button onClick={() => handledelet(users._id)}> <FaTrash /></button>
                  <Link to={`/update/` + users._id}><FaEdit /></Link>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  );
}

export default User;
