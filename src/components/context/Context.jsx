
import { createContext, useState } from "react";
import { All_Products } from "../Data/All_Products";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

export function ShopContextProvider({children}){

    function getDefaultCart(){
        let cart = {};
        for(let i = 0; i < All_Products.length + 1; i++){
            cart[i] = 0;
        }
        return cart;
    }
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    function addToCart(itemId){
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    }

    function removeFromCart(itemId){
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

    return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

