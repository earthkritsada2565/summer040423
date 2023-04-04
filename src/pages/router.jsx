import {createBrowserRouter} from "react-router-dom"
import AppRoot from "./AppRoot"
import Home from "./Home"
import About from "./About"
import Product from "./Product"
import Categories from "./Categories"
import Order from "./Order"
import Login from "./Login"
import PageNotFound from "./PageNotFound"

const router = createBrowserRouter([
    {path: "/",element: <AppRoot/>,children:[
        {path: '',index: true,element:<Home/>},
        {path:'about',element:<About/>},
        {path:'categorie',element:<Categories/>},
        {path:'product',element:<Product/>},
        {path:'order',element:<Order/>},
        {path:'login',element:<Login/>},
    ]},
    {path:"*",element:<PageNotFound/>}
    
])

export default router
