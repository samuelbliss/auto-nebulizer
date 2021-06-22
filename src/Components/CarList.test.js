import {render, within, screen, getAllByTestId} from '@testing-library/react';
import {CarList} from "./CarList";
import {CarItem} from "./CarItem";

describe('list item', () => {
        let mockCarList = []
        const returnCar = (item) => {
            return {
                make: "make" + item,
                model: "model" + item,
                price: 1000 + item,
                year: "year" + item,
                image: "https://www.fakephoto.something/" + item}
        }
        beforeEach(() => {
                mockCarList = []
                for (let i=1; i<4; i++) {
                    mockCarList.push(returnCar(i))
                }
            }
        )
        it("should render list of cars", () => {
            render(<CarList data={mockCarList}/>)
            const list = screen.getByRole("list", {
                name: /cars/i,
            })
            const {getAllByTestId} = within(list)
            const items = getAllByTestId("car-item")
            expect(items.length).toBe(mockCarList.length)
        })
    }
)
