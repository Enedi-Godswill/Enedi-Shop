
import {Products} from "../Data/firstData.js"
import { AiFillStar } from "react-icons/ai"
import { Link } from "react-router-dom"

const HomeProducts = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-5">
      <h1 className="text-xl font-semibold uppercase">Our Products</h1>
      <div className="flex flex-wrap sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center items-center flex-col">
        {
            Products.map((item) => {
                return(
                    <div key={item.id} className="flex justify-center items-center flex-col " >
                        <Link className="flex flex-col justify-center " to={`/cart/${item.id}`}>
                          <img className="w-[18rem] rounded-md " src={item.imgUrl} alt="" />
                          <div className="flex justify-between items-center gap-2 p-2">
                            <h2>{item.info}</h2>
                            <div className="flex items-center">
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                            </div>
                          </div>
                          <h1 className="text-center">{item.price}</h1>
                        </Link>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default HomeProducts
