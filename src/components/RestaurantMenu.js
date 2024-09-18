import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { id: resId } = useParams();
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
          resId
      );
      const json = await response.json();

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find(
            (x) =>
              x &&
              x.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )?.card?.info || null;
      setRestaurant(restaurantData);

      // Check if restaurantData was set correctly
      if (!restaurantData) {
        console.log("No restaurant data found.");
        return;
      }

      // Extract and set menu items
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter(
            (x) =>
              x["@type"] ==
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      if (menuItemsData.length === 0) {
        console.log("No menu items found.");
      }

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (item && !uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });

      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log("Error fetching restaurant info:", error);
    }
  }

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
