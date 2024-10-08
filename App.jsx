import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";

import Body from "./src/components/Body";

/****
 * - Header
 *  - Navbar
 *    - Logo
 *    - Links
 * -Body
 *  - Search 
 *  - Search button
 *  - Restraunt Container
 *      -Restaurant Card
 *        -name of restaurnt, image, star rating, cuisine, delivery time
 * - Footer
 *  -contact
 */



const AppLayout = () => {
  return( <div className="app">
    <Header />
    <Body />
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
