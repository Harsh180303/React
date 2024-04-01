import { CDN_URL } from "../utils/constents";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {cloudinaryImageId, name, avgRatingString, cuisines, sla, costForTwo } = resData?.info;
  
    return (
      <div className="res-card w-[18rem] flex flex-col bg-gray-100 hover:bg-gray-300 p-3 rounded-md min-h-[25rem] justify-between">
        <img
          className="card-img h-[10rem] object-cover rounded-md"
          alt="Image not found!"
          src={CDN_URL + cloudinaryImageId}
        />
  
        <div className="font-bold flex justify-between gap-x-2 items-center pt-3 pb-1">
          <h3 className="text-lg">{name}</h3>
          <div className="bg-green-600 flex items-center gap-x-[2px] p-[0.2rem] rounded-[0.2rem] py-[4px] px-[6px]"><span>{avgRatingString}</span> <span>★</span></div>
        </div>
  
        <div className="flex gap-x-4 items-center justify-between">
          <p>{cuisines.join(', ')}</p>
          <p className="font-bold">{sla.slaString}</p>
        </div>
  
        <div className="font-bold text-lg pt-1">
          <h3>{costForTwo}</h3>
        </div>
  
        <button className=" bg-gradient-to-r from-[#EF6027] to-[#ffb01e] px-2 py-1 w-[12rem] mx-auto font-bold text-white mt-1 rounded-md">Order Now</button>
      </div>
    )
  }

  export default RestaurantCard;