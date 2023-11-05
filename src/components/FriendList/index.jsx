import React from 'react';
import '../FriendList/FriendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => {};

export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <li className="friend-item" id={friend.id}>
        <span className={friend.isOnline ? 'status_on' : 'status_off'}></span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);
