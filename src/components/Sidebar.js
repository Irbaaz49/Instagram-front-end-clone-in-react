import "../styles/Sidebar.css";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profileImage.jpg";

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="Irbaaz.Hussain"
          caption="Irbaaz hussain"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;