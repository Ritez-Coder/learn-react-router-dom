import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Auth from "./Auth";

//?  Error: You cannot render a <Router> inside another <Router>. You should never have more than one in your app.

const router = createBrowserRouter (
     [
          {
               path:"/",
               element : (<Home/>)
          },
          {
               path:"/shop",
               element: <Shop/>
          },
          {
               path:"/auth",
               element: <Auth/>
          }
     ]
)

function Main () {
     return (
          <div id="routing-id">
               
          </div>
     )
}
export default Main
export {router};