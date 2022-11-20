import classes from "./cssfiles/Card.modules.css";

function Card (props){
    return (
        <div className = "card-container">
            <div className = "image-container">
                <img src = {props.image}  alt = "logo" className = "card-image"/>
            </div>
            <div className = "text-box-container">
                <p className = "card-subtext">{props.name}</p>
            </div>
        </div>
    )
}
export default Card;