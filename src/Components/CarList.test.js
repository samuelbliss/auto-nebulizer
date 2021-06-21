import {render, within, screen} from '@testing-library/react';
import {CarList} from "./CarList";
import {CarItem} from "../CarItem";

describe('list item', () => {
        let mockCarList = []
        const returnCar = (item) => {
            return {
                make: "make" + item,
                model: "model" + item,
                price: 1000 + item,
                year: "year" + item,
                image: "https://www.oldcarsweekly.com/.image/t_share/MTcyNDgzNjc1Nzc5OTY2ODkw/image-placeholder-title.jpg"
            }
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
            const {getAllByRole} = within(list)
            const items = getAllByRole("listitem")
            expect(items.length).toBe(mockCarList.length)
        })
        // it("should show each car summary", () => {
        //     render(<CarList />)
        //     const list = screen.getByRole("list", {
        //         name: /cars/i,
        //     })
        //     const {getAllByRole} = within(list)
        //     const items = getallby("listitem")
        //     expect(items.length).toBe(5)
        // })
    }
)
