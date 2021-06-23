import React from "react";

export const CarDetails = React.memo((props) => {
    return (
        <div className="Car-details-container" data-testid="car-details">
            <img className="Car-details-image" alt='mypic'
                 src={props.data.image}/>
            <div className="Car-details-summary">
                <div>{"$" + props.data.price.toLocaleString()}</div>
                <div>{props.data.make}</div>
                <div>{props.data.model}</div>
                <div>{props.data.year}</div>
            </div>
            <button  className="add-to-cart-button">Add to Cart</button>
        </div>
    )
})