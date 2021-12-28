import '../styles/ProfileIcon.css';
function ProfileIcon(props){

    const {iconSize, storyBorder, image}= props;
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
return(
<div className='ProfileIcon'>
  
</div>
    )
}
export default ProfileIcon;