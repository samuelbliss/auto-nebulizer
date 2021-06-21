export const CarItem = (props) => {
    return (
        <div className="Car-list-item-container">
            <img className="Car-list-item-image" alt='mypic'
                 src="https://www.oldcarsweekly.com/.image/t_share/MTcyNDgzNjc1Nzc5OTY2ODkw/image-placeholder-title.jpg"/>
            <div className="Car-list-item-summary">
                <div>{"$" + props.data.price.toLocaleString()}</div>
                <div>{props.data.make}</div>
                <div>{props.data.model}</div>
                <div>{props.data.year}</div>
            </div>
            <button  className="buy-now-button">Buy Now!</button>
        </div>
    )
}

// What does a car look like?
/*
    make
    model
    year
    price
    thumbnail

 */