// src/components/FriendList/index.jsx
import React from 'react';
import FriendListItem from '../FriendListItem.jsx';
import styles from './style.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id}>
        <FriendListItem {...friend} />
      </li>
    ))}
  </ul>
);

export default FriendList;
