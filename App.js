import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

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

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(heading);
