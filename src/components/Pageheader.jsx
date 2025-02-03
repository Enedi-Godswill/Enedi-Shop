
import bgImg from "./assets/BgImg2.jpg"

const Pageheader = ({title}) => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center " style={{backgroundImage:`url(${bgImg})`}} >
      <h1 className="font-bold text-2xl">Welcome to the {title} </h1>
    </div>
  )
}

export default Pageheader
