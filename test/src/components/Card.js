import classes from "./cssfiles/Card.modules.css";

function Card (props){
    return (
        <div className = "container">
            <div>
                <img src = {props.image} alt = "logo" className = "thumbnail" />
            </div>
            <div className>
                <p>{props.name}</p>
            </div>
        </div>
    )
}
export default Card;