import MyHeader from "./components/layout/MyHeader";
import AddButton from "./components/layout/AddButton";

//import uuid v4
import { v4 as uuid } from 'uuid';

function App() {
const unique_id = uuid();
const small_id = unique_id.slice(0,8)
return (
    
    <div className="App">
    <MyHeader />
    <AddButton />
    <h1>Unique ID</h1>
    <p>{unique_id}</p>
    <h1>Sliced Unique ID</h1>
    <p>{small_id}</p>
    </div>
);
}

export default App;
