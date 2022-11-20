import Card from "../Card";
import a from "../../files/a.jpeg";
function MainContainer (props) {
    const countries = [
        { name: "Belgium", continent: "Europe", image: a},
        { name: "India", continent: "Asia" },
      ];
    const searchInput = props.searchInput;

    return (
        <div>{countries.filter(country => country.name.match(searchInput)).map(country => (
            <div>
              <Card name = {country.name} image = {country.image}/>
            </div>
          ))}
          </div>
    )
}
export default MainContainer;