
import { All_Products } from "./Data/All_Products"
import { useContext } from "react"
import { ShopContext } from "./context/Context"
import Product from "./Product/Product";

const Cart = () => {

    const {cartItems} = useContext(ShopContext);

    return (
        <div>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div>
                {All_Products.map(item => {
                    if(cartItems[Product.id] !== 0){
                        return(
                            <cartItems data={Product} />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Cart
