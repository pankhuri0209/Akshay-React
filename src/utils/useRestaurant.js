import { useState } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (resId) => {
  //get data from api
  // return restaurant data
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(FETCH_MENU_URL + resId);
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
  return restaurant;
};

export default useRestaurant;
