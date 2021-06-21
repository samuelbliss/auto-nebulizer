import './App.css';
import {CarItem} from "./CarItem";
import {CarList} from "./Components/CarList";

function App() {
    const cardata = {
        make: "yugo",
        model: "sport",
        price: 3999,
        year: "83",
        image: "https://www.oldcarsweekly.com/.image/t_share/MTcyNDgzNjc1Nzc5OTY2ODkw/image-placeholder-title.jpg"
    }

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*</header>*/}
            <CarList data={[cardata]}/>
        </div>
    );
}

// What does a car look like?
/*
    make
    model
    year
    description
    thumbnail
    mileage

 */

export default App;
