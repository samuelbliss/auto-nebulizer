import {act, render, screen} from '@testing-library/react';
import {CarItem} from "./CarItem";
import userEvent from "@testing-library/user-event";
import {RoutingContext} from './Context'

describe('list item',() => {
        const rand = Math.floor(Math.random()*100)
      const car = {
          make: "make"+ rand,
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

      test('we have make text', () => {
        render(
            <RoutingContext.Provider value={routingContext}>
                <CarItem data = {car}/>
            </RoutingContext.Provider >
        );
        const listItem = screen.getByText(car.make);
        expect(listItem).toBeInTheDocument();
      });

      test('we have model text', () => {
          render(
              <RoutingContext.Provider value={routingContext}>
                  <CarItem data = {car}/>
              </RoutingContext.Provider >
          );
        const listItem = screen.getByText(car.model);
        expect(listItem).toBeInTheDocument();
      });

        test('we have year text', () => {
            render(
                <RoutingContext.Provider value={routingContext}>
                    <CarItem data = {car}/>
                </RoutingContext.Provider >
            );
            const listItem = screen.getByText(car.year);
            expect(listItem).toBeInTheDocument();
        });

        test('we have price text', () => {
            render(
                <RoutingContext.Provider value={routingContext}>
                    <CarItem data = {car}/>
                </RoutingContext.Provider >
            );
            const price = car.price
            const formattedPrice = "$" + price.toLocaleString()
            const listItem = screen.getByText(formattedPrice);
            expect(listItem).toBeInTheDocument();
        });

        test('we have image', () => {
            render(
                <RoutingContext.Provider value={routingContext}>
                    <CarItem data = {car}/>
                </RoutingContext.Provider >
            );
            const listItem = screen.getByRole('img');
            expect(listItem).toBeInTheDocument();
            expect(listItem.getAttribute('src')).toEqual(car.image)
        });

        test('we have a View Details button', () => {
            render(
                <RoutingContext.Provider value={routingContext}>
                    <CarItem data = {car}/>
                </RoutingContext.Provider >
            );
            const listItem = screen.getByRole('button');
            expect(listItem).toBeInTheDocument();
            expect(listItem).toHaveTextContent('View Details');
        });

        test('clicking car details button displays car detail view', ()=> {
            render(
                <RoutingContext.Provider value={routingContext}>
                    <CarItem data = {car}/>
                </RoutingContext.Provider >
            );
            const detailsButton = screen.getByRole('button');

            act(() => {
                    userEvent.click(detailsButton)
                }
            )
            expect(openDetails).toHaveBeenCalledWith(car)
        })
    }

)
