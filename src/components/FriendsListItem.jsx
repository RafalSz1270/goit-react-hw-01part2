// src/components/FriendListItem/index.jsx
import React from 'react';
import styles from './style.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friendListItem}>
    <img src={avatar} alt="Friend avatar" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);

export default FriendListItem;
