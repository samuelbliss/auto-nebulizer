import './App.css';
import {Filterer} from "./Components/Filterer";
import {CarList} from "./Components/CarList";
import {useCallback, useEffect, useState} from "react";

function App() {
    const [carData, setCarData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const filterFunc = useCallback((make, model, year) => {
        if (!make && !model && !year) {
            setFilteredData(carData)
        } else {
            let filterData = carData.filter((car) => {
                const matchMake = make ? car.make.toLowerCase().includes(make.toLowerCase()) : true
                const matchModel = model ? car.model.toLowerCase().includes(model.toLowerCase()) : true
                const matchYear = year ? car.year.toString().includes(year) : true
                return matchMake && matchModel && matchYear
            })
            setFilteredData(filterData)
        }
    }, [carData])

    const [DisplayedComponents, setDisplayedComponents] = useState(
        <div className="App">
            <Filterer filterFunc={filterFunc}/>
            <CarList data={filteredData}/>
        </div>
    )

    useEffect(() => {
        const callApi = async () => {
            const resp = await fetch("http://localhost:5000/api/vehicles", {
                method: 'GET'
            })
            const data = await resp.json()
            setFilteredData(data)
            setCarData(data)
        }
        callApi()
    }, [])



    // const openDetails = useCallback((car)=>{
    //
    // })

    return <DisplayedComponents/>;
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
