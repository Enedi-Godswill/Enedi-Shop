
const ProductId = ({product}) => {

  return (
    <div className="flex items-center gap-4 p-5 sm:mt-[2rem] ">
      <div className=" sm:w-[60%] flex items-center gap-2 ">
        <div className="w-[20%] flex flex-col gap-2 ">
          <img className=" rounded-lg " src={product.imgUrl} alt="" />
          <img className=" rounded-lg " src={product.imgUrl} alt="" />
          <img className=" rounded-lg " src={product.imgUrl} alt="" />
          <img className=" rounded-lg " src={product.imgUrl} alt="" />
        </div>
          <img className="w-[80%] rounded-lg " src={product.imgUrl} alt="" />
      </div>
      <div className="sm:w-[40%] flex flex-col gap-1">
        <h1 className="font-bold text-2xl uppercase">{product.info}</h1>
        <h2 className="text-sm ">{product.description}</h2>
        <p>{product.price}</p>
        <div className="flex gap-2">
          <p className="border-solid border-2 border-red-600 rounded-full p-1 hover:bg-white hover:text-black cursor-pointer transition-all text-sm ">S</p>
          <p className="border-solid border-2 border-red-600 rounded-full p-1 hover:bg-white hover:text-black cursor-pointer transition-all text-sm ">M</p>
          <p className="border-solid border-2 border-red-600 rounded-full p-1 hover:bg-white hover:text-black cursor-pointer transition-all text-sm ">L</p>
          <p className="border-solid border-2 border-red-600 rounded-full p-1 hover:bg-white hover:text-black cursor-pointer transition-all text-sm ">XL</p>
          <p className="border-solid border-2 border-red-600 rounded-full p-1 hover:bg-white hover:text-black cursor-pointer transition-all text-sm ">XXL</p>
        </div>
        <button className="border-solid border-2 p-1 w-[60%] border-orange-600 rounded-md ">add to cart</button>
      </div>
    </div>
  )
}

export default ProductId
