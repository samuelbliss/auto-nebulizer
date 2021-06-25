import './App.scss';
import {Filterer} from "./Components/Filterer";
import React, {useCallback, useEffect, useState, useMemo, Suspense, lazy} from "react";
import {CarDetails} from "./Components/CarDetails";
import {RoutingContext} from "./Components/Context";
import {CartProvider} from "./Components/CartContext";
import './App.scss';

const CarList = lazy(() => import('./Components/CarListMiddleman'));

function App() {
    const [carData, setCarData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [car, setCar] = useState(null);
    const [page, setPage] = useState('list')
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

    let displayedComponents = useMemo(() => {
        switch (page) {
            case 'detail':
                return (
                    <div className="App">
                        <CarDetails car={car}/>
                    </div>
                )
            case 'list':
                return (

                    <div className="App">
                        <Filterer filterFunc={filterFunc}/>
                        <Suspense fallback={<div className='loading-container'> <progress /></div>}>
                            <CarList data={filteredData} />
                        </Suspense>
                    </div>
                )
            default:
                return <div/>
    }}, [car, filterFunc, filteredData, page])

    const openDetails = (car) => {
        setCar(car)
        setPage('detail')
    }
    const displayList = () => {
        setPage('list')
    }

    const routingContext = {
        openDetails,
        displayList
    }


    return (
        <RoutingContext.Provider value={routingContext}>
            <CartProvider >
                <div>
                    <div className="app-header"> SOMETHING HERE</div>
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
