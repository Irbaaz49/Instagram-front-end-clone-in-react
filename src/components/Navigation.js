import '../styles/Navigation.css';
import Menu from './Menu.js';
import instaLogo from '../images/instalogo.png';
import searchIcon from '../images/searchIcon.pmg.png';

function Navigation() {
    return  (
    <div className='Navigation'>
        <div className='container'>
            <img src={instaLogo} alt="logoInsta" className='logo' />
            <div className="search">
                <img src={searchIcon} alt="searchIcon" className='searchIcon' />
           <span className='searchText'>Search</span>
        
            </div>
            <Menu/>
        </div>
    </div>
     );
}

export default Navigation;