import React, {useContext} from "react";
import {RoutingContext} from "./Context";

export const CarDetails = React.memo((props) => {
    const openDetails = () => props.openDetails(props.data)
    const routingFuncs = useContext(RoutingContext)

    return (
        <div className="Car-details-container" data-testid="car-details">
            <button className="back-i-say" onClick={routingFuncs.displayList} >{'<-'}Return to List</button>
            <img className="Car-details-image" alt='mypic'
                 src={props.car.image}/>
            <div className="Car-details-summary">
                <div>{"$" + props.car.price.toLocaleString()}</div>
                <div>{props.car.make}</div>
                <div>{props.car.model}</div>
                <div>{props.car.year}</div>
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    )
})