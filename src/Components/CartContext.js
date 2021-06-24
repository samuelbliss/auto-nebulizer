// import { createContext } from 'react'
//
// export const CartContext = createContext(null)
//
// export class Cart {
//     items = []
//     add = (car) => {
//         console.log("Added vroom-vroom with ID " + car.id)
//         this.items.push(car)
//         console.log("All cars:" + JSON.stringify(this.items))
//     }
// }

import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (carId) => {
        return cart.findIndex( (car) =>
            car.id === carId
        )
    }

    const add = (car) => {
        if (isInCart(cart, car.id) === -1) {
            cart.push(car)
            setCart(cart)
            console.log("Added vroom-vroom with ID " + car.id)
            console.log("All cars:" + JSON.stringify(cart))
        }
    }

    const remove = (car) => {
        const i = isInCart(cart, car.id)
        if ( i !== -1 ) {
            cart.splice(i, 1)
            setCart(cart)
            console.log("Removed vroom-vroom with ID " + car.id)
            console.log("All cars:" + JSON.stringify(cart))
        }
    }

    const value = { add, remove, isInCart }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}