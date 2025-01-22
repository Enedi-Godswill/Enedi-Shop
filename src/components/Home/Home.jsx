
import bgImg from "../assets/BgImg.jpg"

const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col font-semibold text-center bg-cover bg-fixed bg-no-repeat bg-center text-black " style={{backgroundImage:`url(${bgImg})`}} >
      <h1 className="font-bold text-2xl">Welcome to Cool-Pics</h1>
      <div className="text-xl">
        <h2>Home to the coolest pics</h2>
        <p>Where awesome pictures go to rest</p>
      </div>
    </div>
  )
}

export default Home
