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
        const listItem = screen.getByRole('button');
        expect(listItem).toBeInTheDocument();
        expect(listItem).toHaveTextContent('Search');
    })

    test('button disabled when make, model, and year empty', () => {
        render(<Filterer />);
        const listItem = screen.getByRole('button');
        expect(listItem).toHaveAttribute('disabled')
    })

    test('button enabled when make, model, or year not empty', () => {
        render(<Filterer />);

        const model = screen.getByLabelText("Model")
        act(() => {
            userEvent.type(model, 'Pinto')
            }
        )

        const listItem = screen.getByRole('button');
        expect(listItem).not.toHaveAttribute('disabled')
    })
})
