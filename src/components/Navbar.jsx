
import { Link } from "react-router-dom"
import { BiMenu } from "react-icons/bi"
import { MdClose } from "react-icons/md"
import { useState } from "react"

const Navbar = () => {

    const [menuBtn, setMenuBtn] = useState(false)

    function toggleBtn(){
        setMenuBtn(currentState => (!currentState))
    }

  return (
    <div className="fixed top-0 left-0 w-full z-10 flex justify-between items-center p-2 bg-white text-black ">
      <h1 className="text-2xl font-bold uppercase">Enedi</h1>
      <ul className={`absolute top-10 right-3 flex flex-col bg-white p-2 text-xl gap-4 sm:static sm:flex sm:flex-row sm:text-lg capitalize font-semibold ${menuBtn ? "flex" : "hidden"} ` }>
        <li>
            <Link to="/">home</Link>
        </li>
        <li>
            <Link to="/about">about</Link>
        </li>
        <li>
            <Link to="/shop">shop</Link>
        </li>
        <li>
            <Link to="/cart">cart</Link>
        </li>
      </ul>
      <button className="text-2xl sm:hidden " onClick={toggleBtn} >
        {menuBtn ? <MdClose /> : <BiMenu /> }
      </button>
    </div>
  )
}

export default Navbar
