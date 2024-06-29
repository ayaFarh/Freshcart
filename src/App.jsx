import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Layout from './Components/Layout/Layout'
import NotFound from './Pages/NotFound/NotFound'
import toast, { Toaster } from 'react-hot-toast';
import SignUp from './Pages/singUp/SignUp'
import ProtectedRoute from './Components/ProutectedRoute/ProtectedRoute'
import UserProvider from './Context/UserContext/User.Context'
import CartProvider from './Context/UserContext/cart.context'
import WishlistProvider from './Context/WishListcontext/WishList.Context'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import AllOrders from './Pages/AllOrders/AllOrders'
import { QueryClient, QueryClientProvider } from 'react-query'
import Products from './Pages/Products/Products'
import Categories from './Pages/Categories/Categories'
import CategoreisDetails from './Pages/CategoriesDetails/CategoreisDetails'
import Brands from './Pages/Brands/Brands'
import BrandsDetails from './Pages/BrandsDetails/BrandsDetails'
import WishList from './Pages/Wishlist/WishList'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import Verifypassword from './Pages/vertfyPasword/Verifypassword'



function App() {
  const myclient = new QueryClient()
  
  const route = createBrowserRouter([
      {path:"/",element:(<ProtectedRoute>
        <Layout/>
      </ProtectedRoute>),children:[
      {path:"",element:<Home/>},
      {path:"category/:id",element:<CategoreisDetails/>},
      {path:"products",element:<Products/>},
      {path:"categorys",element:<Categories/>},
      {path:"prands",element:<Brands/>},
      {path:"prands/:id",element:<BrandsDetails/>},
      {path:"product/:id",element:<ProductDetails/>},
      {path:"cart",element:<Cart/>},
      {path:"allOrders",element:<AllOrders/>},
      {path:"checkout",element:<Checkout/>},
      {path:"wishlist",element:<WishList/>},
      {path:"*",element:<NotFound/>},
      ]},
    {path:"auth",element:<Layout/>,children:[
      {path:"login",element:<Login/>},
      {path:"signup",element:<SignUp/>},
      {path:"forgotpassword",element:<ForgotPassword/>},
      {path:"verifypassword",element:<Verifypassword/>}
]},
  ])




  return <>

<QueryClientProvider client={myclient}>
<UserProvider>
<CartProvider>
<WishlistProvider>
<RouterProvider router={route}></RouterProvider>
<Toaster/>
</WishlistProvider>
</CartProvider>
</UserProvider>
</QueryClientProvider>
  </>
}

export default App
