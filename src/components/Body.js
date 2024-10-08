import React from "react";
import RestaurantList from "./RestaurantList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
    //   console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(listOfRestaurants);
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter">
            <div className="search">
                    <div className="search-box" type="text">
                        <input type="text"  value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                        <button onClick={()=>{
                                console.log(listOfRestaurants);
                                const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setFilteredRestaurants(filteredRestaurants);
                                setSearchText("");
                        }}>Search</button>
                    </div>
            
            </div>
               

                <button className="filter-btn" 
                onClick={() => {
                    console.log("when rendered for top rated button click");
                    const updatedListOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating >= 4.3);
                    setFilteredRestaurants(updatedListOfRestaurants);
                 }}
                    >Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
           <RestaurantList resObj={filteredRestaurants}/>
        </div>
      </div>
    )
  }

  export default Body;
  