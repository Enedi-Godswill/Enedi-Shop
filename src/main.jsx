import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// other pages
import Shop from "./components/Shop.jsx"
import About from "./components/About.jsx"
import Product from "./components/Product/Product.jsx"

// Context Page
import { ShopContextProvider } from './components/context/Context.jsx'

const router = createBrowserRouter([
  {path:"/", element:<App /> , errorElement:<div>404 Not Found</div> },
  {path:"/product", element:<Product />, errorElement:<div>404 Not Found</div>, children: [
    {path:"/product/:id", element:<Product />, errorElement:<div>404 Not Found</div> },
  ] },
  {path:"/shop", element:<Shop />, errorElement:<div>404 Not Found</div> },
  {path:"/about", element:<About />, errorElement:<div>404 Not Found</div> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </StrictMode>
)
