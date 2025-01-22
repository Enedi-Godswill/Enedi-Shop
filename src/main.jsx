import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// other pages
import Shop from "./components/Shop.jsx"
import About from "./components/About.jsx"
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  {path:"/", element:<App />, errorElement:<div>404 Not Found</div> },
  {path:"/cart", element:<Cart />, errorElement:<div>404 Not Found</div>, children: [
    {path:"/cart/:id", errorElement:<div>404 Not Found</div> }
  ] },
  {path:"/shop", element:<Shop />, errorElement:<div>404 Not Found</div> },
  {path:"/about", element:<About />, errorElement:<div>404 Not Found</div> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
