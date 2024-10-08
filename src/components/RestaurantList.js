import { ReactDOM } from "react";

import RestrauntCard from "./RestaurantCard";


const RestaurantList = (resList) => {

    const dataObj = resList.resObj;

      return (
      <>
          {dataObj && dataObj.map((res) => (
            
            <RestrauntCard key={res.info.id} data={res}/>
          
          ))}
      </>
        
      )
  }

  export default RestaurantList;