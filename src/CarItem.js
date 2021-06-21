export const CarItem = (props) => {
    const price = 3999
    return (
        <div className="Car-list-item-container">
            <img className="Car-list-item-image" alt='mypic' src="https://www.oldcarsweekly.com/.image/t_share/MTcyNDgzNjc1Nzc5OTY2ODkw/image-placeholder-title.jpg"/>
            <div>
                <div>{"$" + price.toLocaleString()}</div>
                <div>Yugo</div>
                <div>GV Sport</div>
                <div>83</div>
            </div>
            <div>
                <button title="Buy Now!" />
            </div>
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