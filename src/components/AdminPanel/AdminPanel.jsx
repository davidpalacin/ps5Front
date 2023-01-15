import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TokenStorageService from '../../_services/TokenStorageService';
import UserService from '../../_services/UserService';
import './AdminPanel.scss';

export default function AdminPanel() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const token = TokenStorageService.getToken();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(token);
  }, [isLoggedIn, user]);

  const getAllUsers = async () => {
    try {
      const res = await UserService.getAllUsers(token);
      setUsers(res.data);
      console.log(users)
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleDelete = async(userToDelete) => {
    const res = await UserService.deleteUser(userToDelete);
    console.log(res);
    await getAllUsers(token);
  }

  return (
    <>
      <div className='admin'>
        <h3 className="titleAdmin">Hi Admin</h3>
        <div className="admin-panel">
          {users.map((user) => (
            <div className='userCard' key={user._id}>
              <strong>{user.name}</strong>
              <div className="admin-buttons">
                <button onClick={()=>{handleDelete(user)}} className='delete-user'>DELETE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
