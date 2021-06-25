import {act, render, screen} from "@testing-library/react";
import {RoutingContext} from "./Context";
import {CartContext} from "./CartContext";
import {CartDisplay} from "./CartDisplay";
import userEvent from "@testing-library/user-event";

describe('car details',() => {
    let mockCarList = []
    const returnCar = (item) => {
        return {
            make: "make" + item,
            model: "model" + item,
            price: 1000 + item,
            year: "year" + item,
            image: "https://www.fakephoto.something/" + item}
    }
    const displayList = jest.fn()
    const routingContext = {
        displayList
    }
    const add = jest.fn()
    const remove = jest.fn()
    let isInCart = jest.fn().mockReturnValue(-1)
    let cartContext = {
        add,
        remove,
        isInCart,
        cart: mockCarList
    }
    beforeEach(() => {
        mockCarList = []
        isInCart = jest.fn().mockReturnValue(-1)
        cartContext = {
            add,
            remove,
            isInCart,
            cart: mockCarList
        }
    })
    test('should render cart display as empty', () => {
        render(
            <RoutingContext.Provider value={routingContext}>
                <CartContext.Provider value={cartContext}>
                    <CartDisplay/>
                </CartContext.Provider>
            </RoutingContext.Provider>
        )
        const text = screen.getByText(/empty/i);
        expect(text).toBeInTheDocument();
    })
    test('should render cart items if cart is not empty', () => {
        const expectedCarNumber = 5
        for (let i=1; i<=expectedCarNumber; i++) {
            mockCarList.push(returnCar(i))
        }
        let cartContext = {
            add,
            remove,
            isInCart,
            cart: mockCarList
        }
        render(
            <RoutingContext.Provider value={routingContext}>
                <CartContext.Provider value={cartContext}>
                    <CartDisplay/>
                </CartContext.Provider>
            </RoutingContext.Provider>
        )
        const listItems = screen.getAllByTestId('car-item');
        expect(listItems.length).toEqual(expectedCarNumber);
    })
    test('should return to list page', () => {
        render(
            <RoutingContext.Provider value={routingContext}>
                <CartContext.Provider value={cartContext}>
                    <CartDisplay/>
                </CartContext.Provider>
            </RoutingContext.Provider>
        )
        const button = screen.getByRole("button", {
            name: "returnToList",
        })
        expect(button).toBeInTheDocument();
        act(() => {
                userEvent.click(button)
            }
        )
        expect(displayList).toHaveBeenCalled();
    })
    test('should remove item from cart', () => {
        const expectedCarNumber = 5
        for (let i=1; i<=expectedCarNumber; i++) {
            mockCarList.push(returnCar(i))
        }
        let cartContext = {
            add,
            remove,
            isInCart,
            cart: mockCarList
        }
        render(
            <RoutingContext.Provider value={routingContext}>
                <CartContext.Provider value={cartContext}>
                    <CartDisplay/>
                </CartContext.Provider>
            </RoutingContext.Provider>
        )
        const button = screen.getAllByRole("button", {
            name: "remove",
        })
        act(() => {
                userEvent.click(button[0])
            }
        )
        expect(remove).toHaveBeenCalledWith(mockCarList[0])
    })
})