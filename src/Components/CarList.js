import {CarItem} from "./CarItem";
import React, {useCallback} from "react";
import { FixedSizeList } from 'react-window';

export const CarList = (props) => {

    const cars = props.data
    const Row = useCallback(({index, style}) => {
        const car = cars[index];
        return (
            <div style={ style }>
                <CarItem data={car} />
            </div>
        )
    })
    return (

        <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth}
            itemSize={125}
            itemCount={cars.length}
        >
            {Row}
        </FixedSizeList>

    )
}