import {act, render, screen} from '@testing-library/react';
import {CarItem} from "./CarItem";
import userEvent from "@testing-library/user-event";
import {RoutingContext} from './Context'
import {CartProvider, useCart} from "./CartContext";
import { renderHook } from '@testing-library/react-hooks'

describe('Cart Context Tests',() => {

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    test('add to cart', ()=>{

        const car = {id:'1234'}
        const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>
        const result = renderHook(() => useCart(), { wrapper }).result

        act(()=>{
            result.current.add(car)
        })
        expect(result.current.cart).toEqual([car])
    })

    test('remove from cart', async ()=>{

        const car = {id:'1234'}
        const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>
        const result = renderHook(() => useCart(), { wrapper }).result
        act(()=>{
            result.current.add(car)
        })
        await act(async () => sleep(500));

        act(()=>{
            result.current.remove(car)
        })
        await act(async () => sleep(500));

        expect(result.current.cart).toEqual([])
    })

})