import './App.css';
import {Filterer} from "./Components/Filterer";
import {CarList} from "./Components/CarList";
import {useCallback, useEffect, useState, useReducer, useContext, createContext} from "react";
import {CarDetails} from "./Components/CarDetails";
import {RoutingContext} from "./Components/Context";
import {CartProvider} from "./Components/CartContext";

function App() {
    const [carData, setCarData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [cart, setCart] = useState([]);
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
            setDisplayedComponents({ type: 'list' })
        }
    }, [carData])

    useEffect(() => {
        const callApi = async () => {
            const resp = await fetch("http://localhost:5000/api/vehicles", {
                method: 'GET'
            })
            const data = await resp.json()
            setFilteredData(data)
            setCarData(data)
            setDisplayedComponents({ type: 'list' })
        }
        callApi()
    }, [])

    const callbackReducer = useCallback((state, action) => {
        switch (action.type) {
            case 'list':
                return (
                    <div className="App">
                        <Filterer filterFunc={filterFunc}/>
                        <CarList data={filteredData} />
                    </div>
                )
            case 'details':
                return (
                    <div className="App">
                       <CarDetails car={action.car}/>
                    </div>
                )
            default:
                return (
                    <div className="App">
                        <Filterer filterFunc={filterFunc}/>
                        <CarList data={filteredData} />
                    </div>
                )
        }
    }, [filterFunc, filteredData] )

    const openDetails = (car) => {
        setDisplayedComponents({ type: 'details', car: car})
    }
    const displayList = () => {
        setDisplayedComponents({ type: 'list'})
    }

    const routingContext = {
        openDetails,
        displayList
    }


    const [displayedComponents, setDisplayedComponents] = useReducer(callbackReducer, (
        <div className="App">
            <Filterer filterFunc={filterFunc}/>
            <CarList data={filteredData} />
        </div>
    ))


    return (
        <RoutingContext.Provider value={routingContext}>
            <CartProvider >
                <div>
                    {displayedComponents}
                </div>
            </CartProvider>
        </RoutingContext.Provider>

    )
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
