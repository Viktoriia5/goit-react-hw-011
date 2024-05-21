import "./Profile.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="user-card">
      <div className="user-img">
        <img src={image} alt="User avatar" />
        <p className="user-name">{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className="user-stats">
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
