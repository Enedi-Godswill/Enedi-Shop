import Footer from "./components/Footer"
import Home from "./components/Home/Home"
import HomeCategory from "./components/Home/HomeCategory"
import HomeProducts from "./components/Home/HomeProducts"
import Register from "./components/Home/Register"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <HomeCategory />
      <HomeProducts />
      <Register />
      <Footer />
    </div>
  )
}

export default App
