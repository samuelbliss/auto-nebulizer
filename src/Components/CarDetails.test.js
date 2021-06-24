import {act, render, screen} from '@testing-library/react';
import {CarDetails} from "./CarDetails";
import userEvent from "@testing-library/user-event";
import {RoutingContext} from "./Context";
import {CartContext} from "./CartContext";

describe('car details',() => {
    const rand = Math.floor(Math.random()*100)
    const car = {
        id: "1234"+rand,
        make: "make" + rand,
        model: "model" + rand,
        price: 1000 + rand,
        year: "year" + rand,
        image: "https://www.fakephoto.something/" + rand
    }
    const openDetails = jest.fn()
    const displayList = jest.fn()
    const routingContext = {
        openDetails,
        displayList
    }
    const add = jest.fn()
    const remove = jest.fn()
    const isInCart = jest.fn().mockReturnValue(false)
    const cartContext = {
        add,
        remove,
        isInCart
    }

    beforeEach(() => {
        render(
            <RoutingContext.Provider value={routingContext}>
                <CartContext.Provider value={cartContext}>
                    <CarDetails car = {car}/>
                </CartContext.Provider>
            </RoutingContext.Provider>
        )
    })
        test('we have model text', () => {
            const listItem = screen.getByText(car.model);
            expect(listItem).toBeInTheDocument();
        });

        test('we have year text', () => {
            const listItem = screen.getByText(car.year);
            expect(listItem).toBeInTheDocument();
        });

        test('we have price text', () => {
            const price = car.price
            const formattedPrice = "$" + price.toLocaleString()
            const listItem = screen.getByText(formattedPrice);
            expect(listItem).toBeInTheDocument();
        });

        test('we have image', () => {
            const listItem = screen.getByRole('img');
            expect(listItem).toBeInTheDocument();
            expect(listItem.getAttribute('src')).toEqual(car.image)
        });

        test('we have an Add to Cart button', () => {
            const addToCart = screen.getByRole("button", {
                name: "addToCart",
            })
            expect(addToCart).toBeInTheDocument();
            act(() => {
                    userEvent.click(addToCart)
                }
            )
            expect(add).toHaveBeenCalledWith(car);
        });
        test('we have a remove from cart button', () => {
            const isInCartTrue = jest.fn().mockReturnValue(true)
            render(
                <RoutingContext.Provider value={routingContext}>
                    <CartContext.Provider value={{...cartContext, isInCart: isInCartTrue}}>
                        <CarDetails car = {car}/>
                    </CartContext.Provider>
                </RoutingContext.Provider>
            )
            const removeFromCart = screen.getByRole("button", {
                name: "removeFromCart",
            })
            expect(removeFromCart).toBeInTheDocument();
            act(() => {
                    userEvent.click(removeFromCart)
                }
            )
            expect(remove).toHaveBeenCalledWith(car);
        });

        test('we have a return to list button', () => {
            const returnButton = screen.getByRole("button", {
                name: "return",
            })
            expect(returnButton).toBeInTheDocument();
            act(() => {
                    userEvent.click(returnButton)
                }
            )
            expect(displayList).toHaveBeenCalled();
        });
    }

)
