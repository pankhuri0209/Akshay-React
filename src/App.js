import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/logo.png";
//import Header from "./components/Header";
import NewHeader, { Title } from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
const heading = createElement(
  "h1",
  {
    id: "title",
    key: "h1",
    style: {
      background: "red",
    },
    className: "title",
  },
  "heading"
);
// const Title = () => (
//   // <h1 id="title" key="h2">
//   //   Shalu's Kitchen
//   // </h1>
//   <a href="/">
//     <img className="logo " alt="logo" src={logo} />
//   </a>
// );
// const heading2 = createElement(
//   "h2",

//   {
//     id: "title",
//     key: "h2",
//   },
//   "heading1"
// );

//jsx

const heading2 = (
  <h1 is="title" key="h2">
    Namaste React
  </h1>
);

//components

//-functional - new - t iwll use this most of the time
//- class based component

const HeaderComponent = () => {
  return (
    <div>
      <NewHeader />
      {console.log("Header Component")}
      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// const container = createElement(
//   "div",
//   {
//     id: "container",
//     hello: "world",
//   },
//   [
//     createElement(
//       "h1",
//       {
//         id: "title",
//         key: "h1",
//       },
//       "Heading 1 for parcel"
//     ),
//     createElement("ul", {}, [createElement("li", {}, "About us")]),
//   ]
// );

//config driven ui
const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delivery charge",
      },
    ],
  },
  {
    type: "restaurants",
    cards: [
      {
        name: "Ghar Ka Khana",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1d578bb732e03c6f591790eb7d2d88e2",
        cusines: ["North Indian", "South Indian"],
        rating: "4.2",
      },
      {
        name: "KFC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1d578bb732e03c6f591790eb7d2d88e2",
        cusines: ["American", "Burger"],
        rating: "4.2",
      },
    ],
  },
];

const restaurantList1 = [
  {
    itemType: "CATEGORY",
    title: "Fast Food",
    iconUrl:
      "https://duyt4h9nfnj50.cloudfront.net/browse_home/Cuisine=FastFood.png",
    categoryType: "CATEGORY",
    keyName: "FastFood",
  },
  {
    itemType: "CATEGORY",
    title: "Pizza",
    iconUrl:
      "https://duyt4h9nfnj50.cloudfront.net/browse_home/Cuisine=Pizza.png",
    categoryType: "CATEGORY",
    keyName: "Pizza",
  },
  {
    itemType: "CATEGORY",
    title: "Indian",
    iconUrl:
      "https://duyt4h9nfnj50.cloudfront.net/browse_home/Cuisine=Indian.png",
    categoryType: "CATEGORY",
    keyName: "Indian",
  },
  {
    itemType: "CATEGORY",
    title: "Vegan",
    iconUrl:
      "https://duyt4h9nfnj50.cloudfront.net/browse_home/Cuisine=Vegan.png",
    categoryType: "CATEGORY",
    keyName: "Vegan",
  },
  {
    itemType: "CATEGORY",
    title: "Latest Deals",
    iconUrl: "https://duyt4h9nfnj50.cloudfront.net/search_home/Deals_1x.png",
    categoryType: "VALUE_HUB_ENTRY",
    keyName: "LatestDeals",
  },
  {
    itemType: "CATEGORY",
    title: "Best overall",
    iconUrl:
      "https://duyt4h9nfnj50.cloudfront.net/browse_home/Cuisine_Top_Eats.png",
    categoryType: "TOP_EATS_ENTRY",
    keyName: "TopEats",
  },
  {
    itemType: "CATEGORY",
    title: "Convenience",
    iconUrl:
      "https://duyt4h9nfnj50.cloudfront.net/search_home/ConvenienceTile.jpg",
    categoryType: "CATEGORY",
    keyName: "Convenience",
  },
  {
    itemType: "CATEGORY",
    title: "Ice Cream and Frozen Yogurt",
    iconUrl:
      "https://duyt4h9nfnj50.cloudfront.net/browse_home/Cuisine=IceCreamAndFrozenYogurt.png",
    categoryType: "CATEGORY",
    keyName: "IceCreamAndFrozenYogurt",
  },
];

const gharKaKhana = {
  name: "Ghar Ka Khana",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1d578bb732e03c6f591790eb7d2d88e2",
  cusines: ["North Indian", "South Indian"],
  rating: "4.2",
};

const burgerKing = {
  name: "Burger king",
  image: "https://duyt4h9nfnj50.cloudfront.net/browse_home/Cuisine=Vegan.png",
  cuisines: ["Burger", "American"],
  rating: "4.2",
};
// const RestaurantCard = (props) => {
//   return (
//     <div className="card">
//       <img src={burgerKing.image} />
//       <h2>{burgerKing.name}</h2>
//       <h3> {burgerKing.cuisines.join(", ")}</h3>
//       <h4>{burgerKing.rating} stars</h4>
//     </div>
//   );
// };
// const RestaurantCard = (props) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           props.restaurant.data?.cloudinaryImageId
//         }
//       />
//       <h2>{props.restaurant.data?.name}</h2>
//       <h3> {props.restaurant.data?.cuisines.join(", ")}</h3>
//       <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    // <div className="header">
    //   <Title>
    //     <div className="nav-items">
    //       <ul>
    //         <li>Home</li>
    //         <li>About </li>
    //         <li>Contact</li>
    //         <li>Cart</li>
    //       </ul>
    //     </div>
    //   </Title>
    // </div>
    <React.Fragment>
      <NewHeader />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
