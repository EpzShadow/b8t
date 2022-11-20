import logo from './stolen.png';
import classes from '../cssfiles/MyHeader.module.css';
import SearchBar from './SearchBar';
function MyHeader(){
    // console.log("HERE");
    return (
        <div className = {classes.container} >
            <img src = {logo} alt = "logo" className = {classes.image} />
            <div className = {classes.searchBar}>
                <SearchBar />
            </div>
        </div>
    )
}
export default MyHeader;