/* eslint-disable react/prop-types */

import { useContext } from "react"
import { ShopContext } from "../context/Context"

const ProductId = ({product}) => {

  const sizes = ['S','M','L','Xl','XXL']

const {addToCart, cartItems} = useContext(ShopContext)

const cartItemAmount = cartItems[product.id];

  return (
    <div className="flex justify-center flex-wrap sm:flex-nowrap items-center gap-1 sm:mt-[2rem] sm:w-[80%] container mx-auto  ">
      <div className=" w-[40%] sm:w-[60%] ">
        <img className="w-[80%] sm:w-[80%] rounded-lg " src={product.imgUrl} alt="" />
      </div>
      <div className="sm:w-[40%] flex flex-col gap-1 items-center">
        <h1 className="font-bold text-2xl uppercase">{product.info}</h1>
        <h2 className="text-sm ">{product.description}</h2>
        <p>{product.price}</p>
        <div className="flex gap-2">
          {
            sizes.map((el,index)=>{
              return  <p key={index} className="border-solid border-2 border-red-600 rounded-full p-1 hover:bg-white hover:text-black cursor-pointer transition-all text-sm w-8 h-8  grid place-items-center ">{el}</p>
            })
          }
        </div>
        <button 
        onClick={()=> addToCart(product.id)}
        className="border-solid border-2 p-1 w-[60%] border-orange-600 rounded-md capitalize" >add to cart
        {/* {cartItemAmount < 0 }  */}
        </button>
      </div>
    </div>
  )
}

export default ProductId
