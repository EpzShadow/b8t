import classes from "./cssfiles/Card.modules.css";

function Card (props){
    return (
        <div className = "container">
            <div className = "image-container">
                <img src = {props.image}  alt = "logo" className = "image"/>
            </div>
            <div className = "text-box-container">
                <p>{props.name}</p>
            </div>
        </div>
    )
}
export default Card;