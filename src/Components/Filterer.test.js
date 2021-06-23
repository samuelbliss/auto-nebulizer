import {act, fireEvent, render, screen} from '@testing-library/react';

import {Filterer} from "./Filterer";
import userEvent from '@testing-library/user-event'

describe('Filtererinator',() => {

    test('we have make filter box', () => {
        render(<Filterer />);
        const makeLabel = screen.getByLabelText("Make");
        expect(makeLabel).toBeInTheDocument();
    })

    test('we have model filter box', () => {
        render(<Filterer />);
        const makeLabel = screen.getByLabelText("Model");
        expect(makeLabel).toBeInTheDocument();
    })

    test('we have year filter box', () => {
        render(<Filterer />);
        const makeLabel = screen.getByLabelText("Year");
        expect(makeLabel).toBeInTheDocument();
    })

    test('we have a search button', () => {
        render(<Filterer />);
        const button = screen.getByRole("button", {
            name: "submit",
        })
        expect(button).toBeInTheDocument();
        expect(button.getAttribute('Value')).toEqual('Search');
    })

    test('button disabled when make, model, and year empty', () => {
        render(<Filterer />);
        const button = screen.getByRole("button", {
            name: "submit",
        })
        expect(button).toHaveAttribute('disabled')
    })

    test('button enabled when make, model, or year not empty', () => {
        render(<Filterer />);

        const model = screen.getByLabelText("Model")
        act(() => {
            userEvent.type(model, 'Pinto')
            }
        )

        const button = screen.getByRole("button", {
            name: "submit",
        })
        expect(button).not.toHaveAttribute('disabled')
    })

    test('submit onclick filter function called with search param - model', () => {
        let funcWasCalled = false
        const myFunc = (make, model, year) => {
            funcWasCalled = true
        }
        render(<Filterer filterFunc={myFunc}/>);

        const model = screen.getByLabelText("Model")
        act(() => {
                userEvent.type(model, 'Pinto')
            }
        )
        const submitButton = screen.getByRole("button", {
            name: "submit",
        })
        act(() => {
                userEvent.click(submitButton)
            }
        )
        expect(funcWasCalled).toBeTruthy()
    })

    test('reset search button restores all vehicles to list', ()=> {
        let funcWasCalledWithNoValues = false
        const myFunc = (make, model, year) => {
            funcWasCalledWithNoValues = !make && !model && !year
        }
        render(<Filterer filterFunc={myFunc}/>);
        const model = screen.getByLabelText("Model")
        act(() => {
                userEvent.type(model, 'Pinto')
            }
        )
        const resetButton = screen.getByRole("button", {
            name: "reset",
        })
        expect(resetButton).toBeInTheDocument();
        act(() => {
                userEvent.click(resetButton)
            }
        )
        expect(funcWasCalledWithNoValues).toBeTruthy()
    }
)
})
