import Card from "../Card";
import a from "../../files/a.jpeg";
import MyHeader from "./MyHeader";
function MainContainer (props) {
    const countries = [
        { name: "Belgium", continent: "Europe", image: a},
        { name: "India", continent: "Asia" },
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a},
        { name: "Belgium", continent: "Europe", image: a}
      ];
    const searchInput = props.searchInput;

    return (
        <div className = "cards-plural">{countries.filter(country => country.name.match(searchInput)).map(country => (
            <div>
              <Card name = {country.name} image = {country.image}/>
            </div>
          ))}
          </div>
    )
}
export default MainContainer;