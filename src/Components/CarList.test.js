import {render, within, screen, getAllByTestId} from '@testing-library/react';
import {CarList} from "./CarList";
import {CarItem} from "./CarItem";
import {RoutingContext} from "./Context";

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
        const openDetails = jest.fn()
        const displayList = jest.fn()
        const routingContext = {
            openDetails,
            displayList
        }
        beforeEach(() => {
                mockCarList = []
                for (let i=1; i<4; i++) {
                    mockCarList.push(returnCar(i))
                }
            }
        )
        it("should render list of cars", () => {
            render(
                <RoutingContext.Provider value={routingContext}>
                    <CarList data={mockCarList}/>
                </RoutingContext.Provider >
            );
            const items = screen.getAllByTestId("car-item")
            expect(items.length).toBe(mockCarList.length)
        })
    }
)
