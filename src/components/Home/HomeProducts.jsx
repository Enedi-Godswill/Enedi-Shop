
import { useContext } from "react"
import { AiFillStar } from "react-icons/ai"
import { Link } from "react-router-dom"
import { MyContext } from "../Context.jsx"

const HomeProducts = () => {

  const userData = useContext(MyContext);

  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-5">
      <h1 className="text-xl font-semibold uppercase">Our Products</h1>
      <div className="flex flex-wrap sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center items-center flex-col">
        {
            userData.map((item) => {
                if(item.category === "home") {
                  return(
                    <div key={item.id} className="flex justify-center items-center flex-col " >
                        <Link className="flex flex-col justify-center " to={`/product/${item.id}`}>
                          <img onClick={window.scrollTo(0,0)} className="w-[18rem] rounded-md " src={item.imgUrl} alt="" />
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
                } else {
                  return null
                }
            })
        }
      </div>
    </div>
  )
}

export default HomeProducts
