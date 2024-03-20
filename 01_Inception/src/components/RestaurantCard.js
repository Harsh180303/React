import { CDN_URL } from "../utils/constents";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {cloudinaryImageId, name, avgRatingString, cuisines, sla, costForTwo } = resData?.info;
  
    return (
      <div className="res-card">
        <img
          className="card-img"
          alt="Image not found!"
          src={CDN_URL + cloudinaryImageId}
        />
  
        <div className="res-rating">
          <h3>{name}</h3>
          <div className="star"><span>{avgRatingString}</span> <span>★</span></div>
        </div>
  
        <div className="cuisine-time">
          <p>{cuisines.join(', ')}</p>
          <p>{sla.slaString}</p>
        </div>
  
        <div className="costTwo">
          <h3>{costForTwo}</h3>
        </div>
  
        <button className="order-btn">Order Now</button>
      </div>
    )
  }

  export default RestaurantCard;