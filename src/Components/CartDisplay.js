import React, {useContext} from "react";
import {CartContext} from "./CartContext";
import {CarItem} from "./CarItem";
import {RoutingContext} from "./Context";

const EmptyDisplay = () => (
    <div>
        Your cart is empty! Go shopping...
    </div>
)
export const CartDisplay = React.memo((props) => {
    const {cart, remove} = useContext(CartContext)
    const {displayList} = useContext(RoutingContext)
    const removeItem = (car) => {
        remove(car)
    }
    let Display = () => <EmptyDisplay/>
    if (cart.length !== 0) {
        Display = () => (
            <div>
                {cart.map((car, index) => (
                    <div key={index}>
                        <CarItem data={car}/>
                        <button aria-label="remove" onClick={() => removeItem(car)}>Remove!</button>
                    </div>
                    )
                )}
            </div>
        )
    }
    return (
        <div data-testid="cart-display">
            <button aria-label="returnToList" onClick={() => displayList()}>Buy More!</button>
            <Display/>
        </div>
    )
})