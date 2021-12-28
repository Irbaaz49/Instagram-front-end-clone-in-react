import "../styles/Menu.css";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as AddNew } from "../images/addnew.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Heart } from "../images/heart.svg";
import { ReactComponent as Message } from "../images/message.svg";
import image from '../images/profileImage.jpg'
import ProfileIcon from './ProfileIcon.js';

function Menu() {
  return (
    <div className="menu">
      <Home className="icon" />
      <Message className="icon" />
      <Explore className="icon" />
      <Heart className="icon" />
      <AddNew className="icon" />
     
<ProfileIcon iconSize='small' image={image}/>

    </div>
  );
}
export default Menu;
