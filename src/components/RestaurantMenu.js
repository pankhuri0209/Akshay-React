import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { id: resId } = useParams();
  //const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);

  const restaurant = useRestaurant(resId);
  resId;

  console.log(params);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Restaurant Id: {resId}</h1>
      {/* Only render restaurant details if restaurant is not null */}
      {restaurant ? (
        <div>
          <h2>{restaurant.name}</h2>
          <img
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            alt={restaurant.name}
          />
          <h3>{restaurant.area}</h3>
          <h3>{restaurant.city}</h3>
          <h3>{restaurant.avgRating} stars</h3>
          <h3>{restaurant.costForTwoMsg}</h3>

          <div>
            <h1>Menu</h1>
            <ul>
              {/* Render menu items if available */}
              {menuItems && menuItems.length > 0 ? (
                menuItems.map((item) => <li key={item.id}>{item.name}</li>)
              ) : (
                <p>No menu items available.</p>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading restaurant details...</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
