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

import {createContext, useContext, useState} from 'react'

export const useCart = ()=> useContext(CartContext)

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (carId) => {
        console.log('cart info ' + carId, cart)

        return cart.findIndex( (car) =>
            car.id === carId
        )
    }

    const add = (car) => {
        console.log('Adding to cart ', car.id)
        if (isInCart(car.id) === -1) {
            cart.push(car)
            setCart(cart)
            console.log("Added vroom-vroom with ID " + car.id)
            console.log("All cars:" + JSON.stringify(cart))
        }
    }

    const remove = (car) => {
        console.log('Removing from cart')
        const i = isInCart(car.id)
        if ( i !== -1 ) {
            cart.splice(i, 1)
            setCart(cart)
            console.log("Removed vroom-vroom with ID " + car.id)
            console.log("All cars:" + JSON.stringify(cart))
        }
    }

    const value = { add, remove, isInCart, cart }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}