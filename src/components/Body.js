import { RestaurantCard } from "./RestaurantCard";
import { IMG_CDN_URL, restaurantList } from "../constants";
import { useState } from "react";

const Body = () => {
  let searchTxt = "KFC";
  const [searchInput, setSearchInput] = useState("KFC"); //state variable
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          //    value={searchTxt}
          onChange={(e) => {
            setSearchInput(e.target.value);
            // searchTxt = e.target.value;
            console.log(e.target.value);
          }}
        />
        <button className="search-btn">Search -{searchInput}</button>
      </div>
      <div className="restaurants-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
