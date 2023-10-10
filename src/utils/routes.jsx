import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Index from "../Index.jsx";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])

function Routes() {
    return (
        <RouterProvider router={router} />
    )
}

export default Routes