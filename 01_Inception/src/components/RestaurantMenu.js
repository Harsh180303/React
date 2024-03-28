import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_API_TWO } from "../utils/constents"

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    console.log("Showing resId")
    console.log(resId)
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId + MENU_API_TWO);

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;    

    
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    
    console.log(itemCards)

    return (
      <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards &&
            itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - {"Rs. "}
                {item.card.info.price !== undefined &&
                item.card.info.price !== null
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice !== undefined &&
                    item.card.info.defaultPrice !== null
                  ? item.card.info.defaultPrice / 100
                  : "Price unavailable"}
              </li>
            ))}
        </ul>
      </div>
    );
};

export default RestaurantMenu;