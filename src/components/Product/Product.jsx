
import { Link, useParams } from "react-router-dom";
import { useContext } from "react"
import { MyContext } from "../Context"
import Navbar from "../Navbar";
import CartId from "./ProductId";
import { AiFillStar } from "react-icons/ai";

const Product = () => {

  const params = useParams();
  const userData = useContext(MyContext);
  const product = userData.find((e) => e.id === Number(params.id));

  return (
    <div className="p-2 gap-2">
      <Navbar />
      <div className="w-full h-[70vh] sm:h-[80vh] md:h-screen flex flex-col justify-center items-center ">
        <CartId product={product} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <hr className="h-[10px] w-full mb-2 rounded bg-white " />
        <h1 className="font-bold text-2xl ">Related Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          {
            userData.map((item) => {
              if(item.category === "cart") {
                return (
                  <Link key={item.id} to={`/product/${item.id}`}>
                    <div className="flex flex-col text-center p-3 justify-center gap-2 " >
                      <img onClick={window.scrollTo(0,0)} className="rounded-md " src={item.imgUrl} alt="" />
                      <div className="flex justify-around items-center gap-2 p-1">
                        <p>{item.price}</p>
                        <div className="flex gap-1">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <p>{item.info}</p>
                    </div>
                  </Link>
                )
              } else {
                return null
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Product
