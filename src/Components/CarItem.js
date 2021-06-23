import React from "react";

export const CarItem = React.memo((props) => {
    return (
        <div className="Car-list-item-container" data-testid="car-item">
            <img className="Car-list-item-image" alt='mypic'
                 src={props.data.image}/>
            <div className="Car-list-item-summary">
                <div>{"$" + props.data.price.toLocaleString()}</div>
                <div>{props.data.make}</div>
                <div>{props.data.model}</div>
                <div>{props.data.year}</div>
            </div>
            <button  className="buy-now-button">Buy Now!</button>
        </div>
    )
})

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