import React from "react";
import { CDN_URL } from "../utils/constants";


const RestrauntCard = (props) => {
    const { data } = props
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

    export default RestrauntCard;