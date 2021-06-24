import React, {useContext, useEffect, useMemo, useState} from "react";
import {RoutingContext} from "./Context";
import {CartContext} from "./CartContext";

export const CarDetails = (props) => {

    // const routingFuncs = useContext(RoutingContext)
    const {add,remove,isInCart,cart} = useContext(CartContext)
    const {displayList} = useContext(RoutingContext)
    const [displayAdd, setdisplayAdd] = useState(isInCart(props.car.id)===-1)
    const addToCart = () => {
        add(props.car)
        setdisplayAdd(false)
    }
    const removeFromCart = () => {
        remove(props.car)
        setdisplayAdd(true)

    }
    // const carIsInCart = useMemo(() => isInCart(props.car.id),[cart])

    console.log('CarDetails', cart)


    return (
        <div className="Car-details-container" data-testid="car-details">
            <button className="back-i-say" aria-label="return" onClick={displayList} >{'<-'}Return to List</button>
            <img className="Car-details-image" alt='mypic'
                 src={props.car.image}/>
            <div className="Car-details-summary">
                <div>{"$" + props.car.price.toLocaleString()}</div>
                <div>{props.car.make}</div>
                <div>{props.car.model}</div>
                <div>{props.car.year}</div>
            </div>
            { displayAdd ? <button className="add-to-cart-button" aria-label="addToCart" onClick={addToCart}>Add to Cart</button> :
            <button className="remove-from-cart-button" aria-label="removeFromCart" onClick={removeFromCart}>Changed my mind</button>}
        </div>
    )
}