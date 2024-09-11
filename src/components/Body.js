import { RestaurantCard } from "./RestaurantCard";
import { IMG_CDN_URL, restaurantList } from "../constants";
const Body = () => {
  return (
    <div className="resturants-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
      {/* <RestaurantCard
          name={restaurantList[0].data.name}
          cuisines={restaurantList[0].data.cuisines}
        />
        <RestaurantCard
          name={restaurantList[1].data.name}
          cuisines={restaurantList[1].data.cuisines}
        />
        <RestaurantCard
          name={restaurantList[2].data.name}
          cuisines={restaurantList[2].data.cuisines}
        /> */}
      {/* <RestaurantCard {...restaurantList[0].data} />
        <RestaurantCard {...restaurantList[1].data} />
        <RestaurantCard {...restaurantList[2].data} />
        <RestaurantCard {...restaurantList[3].data} />
        <RestaurantCard {...restaurantList[4].data} />
        <RestaurantCard {...restaurantList[5].data} /> */}

      {/* <RestaurantCard restaurant={restaurantList[3].data} />
        <RestaurantCard restaurant={restaurantList[4].data} />
        <RestaurantCard restaurant={restaurantList[5].data} />
        <RestaurantCard restaurant={restaurantList[6]} />
        <RestaurantCard restaurant={restaurantList[7]} /> */}
    </div>
  );
};
export default Body;
