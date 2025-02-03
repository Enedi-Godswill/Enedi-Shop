
import Navbar from "./Navbar.jsx"
import Pageheader from "./Pageheader.jsx"
import Footer from "./Footer.jsx"
import { All_Products } from "./Data/All_Products.js"
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"

const Shop = () => {
  return (
    <div>
      <Navbar />
      {/* shop top part */}
      <Pageheader title="Shop" />
      <div className="flex justify-center items-center flex-col gap-3 p-2">
        <h1 className="text-2xl font-bold">Our Products</h1>
        <div className="flex justify-center items-center flex-wrap xs:grid sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 ">
          {
            All_Products.map((item) => {
              return(
                <div key={item.id} className="flex justify-center flex-col mb-3 ml-3" >
                  <Link to={`/product/${item.id}`}>
                    <img onClick={window.scrollTo(0,0)} className="rounded-2xl w-[20rem] " src={item.imgUrl} alt="" />
                    <div className="flex justify-between items-center gap-3">
                      <p>{item.price}</p>
                      <div className="flex gap-1">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                    <p className="text-center">{item.info}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Shop
