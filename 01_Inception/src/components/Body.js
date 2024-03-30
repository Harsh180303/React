import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([])
 
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState("");

  useEffect(() => {            //Ye bad mai render hota hai
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json)

    // Optinal Chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) 
  return (
    <h1>It seems you are offline... <br/>Please Check your Internet Connection and try again </h1>
  )
  
  // Conditional Operation 
    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <div>
            <input
              className="search"
              type="search"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                // Filter the restaurant cards and update the UI
                // console.log(searchText)
                const filteredRestaurants = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurant(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>

        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <Link
              className="link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  export default Body;