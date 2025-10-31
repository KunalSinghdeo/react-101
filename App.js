// <div>
//     <div>
//         <h1></h1>
//     </div>
// </div>

const parent = React.createElement(
  "div",
  {},
  React.createElement("div", {}, React.createElement("h1", {}, "this is h1"))
);

// <div>
//     <div>
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div
const parentWithSiblingChild = React.createElement(
  "div",
  {},
  React.createElement("div", {}, [
    React.createElement("h1", {}, "this is h1"),
    React.createElement("h2", {}, "this is h2 sibling"),
  ])
);

// <div>
//     <div>
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div
// <div>
//     <div>
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div

const parentWithSibling = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "this is h1"),
    React.createElement("h2", {}, "this is h2 sibling"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "this is h1"),
    React.createElement("h2", {}, "this is h2 sibling"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", className: "top-heading" },
  "Hey There from React"
);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root);
root.render(heading);
