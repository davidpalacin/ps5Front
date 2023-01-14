import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.scss';

export default function UserProfile() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="profile">
      <strong>{user.name.toUpperCase()}'s</strong> renting list
    </div>
  );
}
