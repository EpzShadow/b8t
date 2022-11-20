import Card from "../Card";
function MainContainer (props) {
    const countries = [
        { name: "Belgium", continent: "Europe" },
        { name: "India", continent: "Asia" },
      ];
    const searchInput = props.searchInput;

    return (
        <div>{countries.filter(country => country.name.match(searchInput)).map(country => (
            <div>
                {console.log("HEREEE")}
              <Card name = {country.name}/>
            </div>
          ))}
          </div>
    )
}
export default MainContainer;