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

  return (
    <div className="admin-panel">
      <h3>Admin page</h3>

      <div>
        {users.map((user) => (
          <div key={user._id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}
