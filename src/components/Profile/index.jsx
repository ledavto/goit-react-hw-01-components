import user from '../Profile/user'
{/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
    stats={user.stats} /> */}
  
const Profile = props =>(
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
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
)

ReactDOM.createRoot(document.getElementById("root")).render(<Profile />);