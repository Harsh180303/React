import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MENU_API  } from "../utils/constents";
import UserContext from "../utils/UserContext";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([])
 
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState("");

  console.log("list of Res-tro-wn", listOfRestaurants)

  useEffect(() => {            //Ye bad mai render hota hai
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json)

    // Optinal Chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) 
  return (
    <h1>It seems you are offline... <br/>Please Check your Internet Connection and try again</h1>
  )

  const { loggedInUser, setUserName } = useContext(UserContext)
  
  // Conditional Operation 
    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className=" px-4 mx-auto flex flex-col gap-y-4">
        <div className="flex gap-6">
          <div>
            <input
              className=" outline-none w-52 rounded-md px-1.5 py-1 placeholder:text-[#EF6027] bg-gray-100"
              type="search"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-1.5 py-1 bg-green-600 text-white font-bold rounded-md"
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
            className="filter-btn bg-gray-100 px-1.5 py-1 rounded-md font-medium"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>

          <div>
            <label className="font-bold ">User Name : </label>
            <input 
            className="bg-gray-100 px-1.5 py-1 rounded-md font-medium"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly py-12 gap-y-10">
          {filteredRestaurant.map((restaurant) => (
            <Link
              className="link "
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