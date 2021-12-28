import "../styles/profile.css";
import ProfileIcon from "./ProfileIcon";
import users from "../data/Users";

function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
       <a  href="https://www.instagram.com/_irbaaz_hussain/">   <span className="accountName">{accountName}</span></a>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
}

export default Profile;