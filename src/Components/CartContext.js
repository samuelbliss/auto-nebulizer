import {createContext, useContext, useState} from 'react'

export const useCart = ()=> useContext(CartContext)

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (carId) => {
        return cart.findIndex( (car) =>
            car.id === carId
        )
    }

    const add = (car) => {
        if (isInCart(car.id) === -1) {
            cart.push(car)
            setCart(cart)
        }
    }

    const remove = (car) => {
        const i = isInCart(car.id)
        if ( i !== -1 ) {
            cart.splice(i, 1)
            setCart(cart)
        }
    }

    const value = { add, remove, isInCart, cart }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}