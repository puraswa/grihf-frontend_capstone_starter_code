import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-email">{user.email}</p>
      <p className="profile-bio">{user.bio}</p>
    </div>
  );
};

export default ProfileCard;