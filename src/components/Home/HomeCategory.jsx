
import { Adverts } from "../Data/Advert.js"
import { Link } from "react-router-dom"

const HomeCategory = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 p-3">
      <h1 className="text-2xl font-bold">Our Services</h1>
      <div className="flex flex-wrap sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center items-center">
        {
            Adverts.map((item) => {
                return (
                    <div className="relative p-2 w-[18rem] h-full " key={item.id}>
                        <Link to="/shop">
                            <img className="rounded-md " src={item.imgUrl} alt="" />
                            <p className="absolute top-2 left-3 capitalize text-xl font-semibold text-black">{item.info}</p>
                        </Link>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default HomeCategory
