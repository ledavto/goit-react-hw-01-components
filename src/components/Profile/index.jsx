import user from './user.json'

import React from 'react';
import ReactDOM from 'react-dom/client';

export const Profile = props =>(
<div class="profile">
  <div class="description">
            <img
                src={ user.avatar}
      alt="User avatar"
      class="avatar"
    />
            <p class="name">{user.username}</p>
    <p class="tag">{user.tag}</p>
    <p class="location">{user.location}</p>
  </div>

        <ul class="stats">
            
    <li>
                <span class="label">Followers</span>
      <span class="quantity">{user.stats.followers }</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
)

ReactDOM.createRoot(document.getElementById("root")).render(<Profile />);