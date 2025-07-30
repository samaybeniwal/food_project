import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, Outlet } from "react-router"
import { RouterProvider } from "react-router"; 
import Error from "./headerComponent/Error"
import About from "./headerComponent/About";
import Contact from "./headerComponent/Contact"
import ResMenu from "./components/ResMenu";
// footer:
// -copyright
// -links
// -Address
// -contact
const AppLayout = ()=>{
    return(
        <div id="app">
            <Header/>
            <Outlet/>
           
        </div>
    )
}
const appRouter =createBrowserRouter([
    {
        path :"/",
        element:<AppLayout/ >,
        children:[
            {
                 path:"/",
                 element:<Body/>
            },
            {
                 path:"/about",
                 element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/> 
            },
            {
                path:"/restaurents/:resId",
                element:<ResMenu/>
            }
        ],
        errorElement : <Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);