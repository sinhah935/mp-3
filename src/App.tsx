import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root.tsx";
import "./App.css"


export default function App() {

    // Create a Router object and parameterize it with our router schema
    const router = createBrowserRouter(
        //Array of objects
        [
            //Asterik * means all path
            {path:"*", Component:Root}
        ]
    );

  return (
   <>
        <RouterProvider router={router} />
   </>
  )
}


