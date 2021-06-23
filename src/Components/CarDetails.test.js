import {act, render, screen} from '@testing-library/react';
import App from '../App';
import {CarDetails} from "./CarDetails";
import userEvent from "@testing-library/user-event";

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
        // test('we have model text', () => {
        //     render(<CarDetail data = {car}/>);
        //     const listItem = screen.getByText(car.model);
        //     expect(listItem).toBeInTheDocument();
        // });
        //
        // test('we have year text', () => {
        //     render(<CarDetail data = {car}/>);
        //     const listItem = screen.getByText(car.year);
        //     expect(listItem).toBeInTheDocument();
        // });
        //
        // test('we have price text', () => {
        //     render(<CarDetail data = {car}/>);
        //     const price = car.price
        //     const formattedPrice = "$" + price.toLocaleString()
        //     const listItem = screen.getByText(formattedPrice);
        //     expect(listItem).toBeInTheDocument();
        // });
        //
        // test('we have image', () => {
        //     render(<CarDetail data = {car}/>);
        //     const listItem = screen.getByRole('img');
        //     expect(listItem).toBeInTheDocument();
        //     expect(listItem.getAttribute('src')).toEqual(car.image)
        // });

        test('we have an Add to Cart button', () => {
            render(<CarDetails data = {car}/>);
            const addToCart = screen.getByRole("button", {
                name: "addToCart",
            })
            expect(addToCart).toBeInTheDocument();
            // act(() => {
            //         userEvent.click(addToCart)
            //     }
            // )
            // expect(addToCart).toHaveTextContent('Add to Cart');
        });
    }

)
