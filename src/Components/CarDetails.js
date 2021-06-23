import React, {useContext} from "react";
import {RoutingContext} from "./Context";
import {CartContext} from "./CartContext";

export const CarDetails = React.memo((props) => {

    const routingFuncs = useContext(RoutingContext)
    const cartContext = useContext(CartContext)
    const addToCart = () => cartContext.add(props.car)
    const removeFromCart = () => cartContext.remove(props.car)

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
            <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
            <button className="remove-from-cart-button" onClick={removeFromCart}>Changed my mind</button>
        </div>
    )
})