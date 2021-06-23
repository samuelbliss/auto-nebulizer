import {CarItem} from "./CarItem";
import React from "react";

export const CarList = React.memo((props) => {
    return (
        props.data.length < 1 ? <div>Loading</div> :
        <ul aria-label="cars" className="non-bulleted-list" data-testid="car-list">
            {props.data.map((car, index) => (
                <li key={index}>
                    <CarItem data={car} />
                </li>
            ))}
        </ul>

    )
})