import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      console.log("16");
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

      // Set menu item data
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

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  console.log(params);
  return (
    <div>
      <h1>Restaurant Id: {resId}</h1>
      <h2></h2>
    </div>
  );
};

export default RestaurantMenu;
