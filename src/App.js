import './App.css';
import {Filterer} from "./Components/Filterer";
import {CarList} from "./Components/CarList";
import {useEffect, useState} from "react";

function App() {
    const [carData, setCarData] = useState([]);
    useEffect(() => {
        const callApi = async () => {
            const resp = await fetch("http://localhost:5000/api/vehicles", {
                method: 'GET'
            })
            const data = await resp.json()
            setCarData(data)
        }
        callApi()
    }, [])
    return (
        <div className="App">
            <Filterer />
            <CarList data={carData}/>
        </div>
    );
}

// What does a car look like?
/*
    "id": "b807397e-a752-4fe0-a593-282f9c967d24",
    "make": "Ford",
    "model": "Taurus",
    "year": 2018,
    "image": "https://via.placeholder.com/200",
    "color": "Silver",
    "price": "176.74",
    "available": true

 */

export default App;
