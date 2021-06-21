import { render, screen } from '@testing-library/react';
import App from './App';
import {CarItem} from "./CarItem";

describe('list item',() => {

      beforeAll(() => {

          }
      )
      test('we have model text', () => {
        render(<CarItem/>);
        const listItem = screen.getByText('Yugo');
        expect(listItem).toBeInTheDocument();
      });

      test('we have make text', () => {
        render(<CarItem/>);
        const listItem = screen.getByText('GV Sport');
        expect(listItem).toBeInTheDocument();
      });

        test('we have year text', () => {
            render(<CarItem/>);
            const listItem = screen.getByText('83');
            expect(listItem).toBeInTheDocument();
        });

        test('we have price text', () => {
            render(<CarItem/>);
            const price = 3999
            const formattedPrice = "$" + price.toLocaleString()
            const listItem = screen.getByText(formattedPrice);
            expect(listItem).toBeInTheDocument();
        });

        test('we have image', () => {
            render(<CarItem/>);
            const listItem = screen.getByRole('img');
            expect(listItem).toBeInTheDocument();
            expect(listItem.getAttribute('src')).toEqual('https://www.oldcarsweekly.com/.image/t_share/MTcyNDgzNjc1Nzc5OTY2ODkw/image-placeholder-title.jpg')
        });

        test('we buy button', () => {
            render(<CarItem/>);
            const listItem = screen.getByRole('button');
            expect(listItem).toBeInTheDocument();
            expect(listItem.getAttribute('title')).toEqual('Buy Now!')
        });
    }

)
