import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TokenStorageService from '../../_services/TokenStorageService';
import UserService from '../../_services/UserService';
import './AdminPanel.scss';

export default function AdminPanel() {
  const navigate = useNavigate();
  const token = TokenStorageService.getToken();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(token);
  }, []);

  const getAllUsers = async () => {
    try {
      const res = await UserService.getAllUsers(token);
      console.log(res)
      setUsers(res.data);
      console.log(users)
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleLogout = () => {
    TokenStorageService.logOut();
    navigate("/movies");
  };

  return (
    <div className="admin-panel">
      <h3>Admin page</h3>

      <div>
        {users.map((user) => (
          <div key={user._id}>{user.name}</div>
        ))}
      </div>

      <button onClick={handleLogout}> Logout </button>
    </div>
  );
}
