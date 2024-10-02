import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { CDN_URL } from "./src/utils/constants.js";
import  resList  from "./src/utils/mockData.js";

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










const RestaurantList = (resList) => {
  const data = resList.resObj;
  console.log(data);
    return (
    <>
        {data.map((res) => (
          
          <RestrauntCard key={res.info.id} data={res}/>
        
        ))}
    </>
      
    )
}



const RestrauntCard = (props) => {
const { data } = props
// console.log(props);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo
   } = data?.info;
 return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
        <img alt="res-logo" className="res-logo" src= {CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{data.info.sla.deliveryTime} minutes</h4>
    </div>
  )
  
}



const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="restaurant-container">
         <RestaurantList resObj={resList}/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return( <div className="app">
    <Header />
    <Body />
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
