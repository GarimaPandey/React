import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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





const Header = () => {
  return (
    <div className="header">
      <div id="logo-container">
          <img className="logo" src="https://instantpoteats.com/wp-content/uploads/2020/03/instant-pot-indian-lamb-curry-2.jpg" />
      </div>
      <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
      </div>
    </div>
  )
}

const resList = [
    {
        "info": {
            "id": "393840",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Chikka Lakshmaiah Layout",
            "areaName": "Adugodi",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "61955",
            "avgRatingString": "4.2",
            "totalRatingsString": "4.9K+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-02 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-9f9b58fd-5694-4059-834c-83e41a0cd548"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/chinese-wok-chikka-lakshmaiah-layout-adugodi-rest393840",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },


    {
        "info": {
            "id": "524353",
            "name": " Irani Std. Tea",
            "cloudinaryImageId": "bwkz4uv3qyx33brboywf",
            "locality": "4th Sector",
            "areaName": "HSR Layout",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Snacks",
                "Beverages",
                "Bakery",
                "Desserts",
                "Fast Food"
            ],
            "avgRating": 4.5,
            "parentId": "374583",
            "avgRatingString": "4.5",
            "totalRatingsString": "5.3K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-08 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-9f9b58fd-5694-4059-834c-83e41a0cd548"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/-irani-std-tea-4th-sector-hsr-layout-rest524353",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "337335",
            "name": "Kannur food kitchen",
            "cloudinaryImageId": "a27weqanhnszqiuzsoik",
            "locality": "1st  Stage",
            "areaName": "BTM Layout",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kerala",
                "Biryani",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "114756",
            "avgRatingString": "4.1",
            "totalRatingsString": "19K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-02 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-9f9b58fd-5694-4059-834c-83e41a0cd548"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/kannur-food-kitchen-1st-stage-btm-layout-rest337335",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "151076",
            "name": "Captain Olive",
            "cloudinaryImageId": "f5f9d4821b9c667a424d971079f95815",
            "locality": "2nd Stage",
            "areaName": "BTM Layout",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American",
                "shawarma",
                "Rolls & Wraps",
                "Beverages",
                "Fast Food",
                "Continental"
            ],
            "avgRating": 4.3,
            "parentId": "21078",
            "avgRatingString": "4.3",
            "totalRatingsString": "8.9K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-02 06:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-9f9b58fd-5694-4059-834c-83e41a0cd548"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/captain-olive-2nd-stage-btm-layout-rest151076",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "348811",
            "name": "The Cubano Sandwich Co.",
            "cloudinaryImageId": "10099994d51aaaa5bd92b253af10fcf4",
            "locality": "6th Sector",
            "areaName": "HSR Layout",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Salads",
                "Beverages",
                "Continental",
                "Mexican"
            ],
            "avgRating": 4.4,
            "parentId": "231098",
            "avgRatingString": "4.4",
            "totalRatingsString": "3.9K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-08 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-9f9b58fd-5694-4059-834c-83e41a0cd548"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/the-cubano-sandwich-co-6th-sector-hsr-layout-rest348811",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "387468",
            "name": "The Breakfast Nook",
            "cloudinaryImageId": "3a26aa967dc44e104627a4b8a8117454",
            "locality": "6th Sector",
            "areaName": "HSR Layout",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Continental",
                "Healthy Food",
                "Beverages"
            ],
            "avgRating": 4.6,
            "parentId": "257216",
            "avgRatingString": "4.6",
            "totalRatingsString": "4.9K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-08 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-9f9b58fd-5694-4059-834c-83e41a0cd548"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/the-breakfast-nook-6th-sector-hsr-layout-rest387468",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "634643",
            "name": "Kalia's Kitchen",
            "cloudinaryImageId": "4d51bf9ab31fe8d7f969c0db630c1df9",
            "locality": "BTM Layout",
            "areaName": "Btm Layout",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Indian",
                "Snacks"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "382629",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.0K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-02 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.5",
                    "ratingCount": "200"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-9f9b58fd-5694-4059-834c-83e41a0cd548"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/kalias-kitchen-btm-layout-rest634643",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "121603",
            "name": "Kannur Food Point",
            "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
            "locality": "BTM Layout",
            "areaName": "BTM Layout",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Kerala",
                "Chinese"
            ],
            "avgRating": 4.2,
            "parentId": "20974",
            "avgRatingString": "4.2",
            "totalRatingsString": "63K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-02 02:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-9f9b58fd-5694-4059-834c-83e41a0cd548"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/kannur-food-point-btm-layout-rest121603",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]




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
        <img alt="res-logo" className="res-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + cloudinaryImageId} />
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
