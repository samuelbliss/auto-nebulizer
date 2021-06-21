import { render, screen } from '@testing-library/react';
import App from './App';
import {CarItem} from "./CarItem";

describe('list item',() => {
        const rand = Math.floor(Math.random()*100)
      const car = {
          make: "make"+ rand,
          model: "model" + rand,
          price: 1000 + rand,
          year: "year" + rand,
          image: "https://www.oldcarsweekly.com/.image/t_share/MTcyNDgzNjc1Nzc5OTY2ODkw/image-placeholder-title.jpg"
      }
      test('we have make text', () => {
        render(<CarItem data = {car}/>);
        const listItem = screen.getByText(car.make);
        expect(listItem).toBeInTheDocument();
      });

      test('we have model text', () => {
        render(<CarItem data = {car}/>);
        const listItem = screen.getByText(car.model);
        expect(listItem).toBeInTheDocument();
      });

        test('we have year text', () => {
            render(<CarItem data = {car}/>);
            const listItem = screen.getByText(car.year);
            expect(listItem).toBeInTheDocument();
        });

        test('we have price text', () => {
            render(<CarItem data = {car}/>);
            const price = car.price
            const formattedPrice = "$" + price.toLocaleString()
            const listItem = screen.getByText(formattedPrice);
            expect(listItem).toBeInTheDocument();
        });

        test('we have image', () => {
            render(<CarItem data = {car}/>);
            const listItem = screen.getByRole('img');
            expect(listItem).toBeInTheDocument();
            expect(listItem.getAttribute('src')).toEqual('https://www.oldcarsweekly.com/.image/t_share/MTcyNDgzNjc1Nzc5OTY2ODkw/image-placeholder-title.jpg')
        });

        test('we buy button', () => {
            render(<CarItem data = {car}/>);
            const listItem = screen.getByRole('button');
            expect(listItem).toBeInTheDocument();
            expect(listItem).toHaveTextContent('Buy Now!');
        });
    }

)
