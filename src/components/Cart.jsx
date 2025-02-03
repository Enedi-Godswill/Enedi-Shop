
import { useState } from "react";
import { All_Products } from "./Data/All_Products";

const Cart = () => {

    const getDefaultCart = () => {
        let cart = {};
        for(let i = 0; i < All_Products.length; i++ ){
            cart[i] = 0;
        }
        return cart;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart)

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[ItemId]:prev[ItemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[ItemId]:prev[ItemId] - 1}));
    }

    return (
        <div>
        
        </div>
    )
}

export default Cart
