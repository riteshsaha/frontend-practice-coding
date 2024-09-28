const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
); // It creates a JS Object; this still needs to be rendered in DOM.
console.log(heading); // heading is a React element which is a JS object. It contains props attribute which consist of children and other properties like id, class etc.
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);

/* 
Nested component structure
<div id="parent">
    <div id="child">
        <h1>Some text....</h1>
    </div>
</div>


const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child"}, React.createElement("h1", {}, "Some text...")));
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);


Adding children siblings
<div id="parent">
    <div id="child">
        <h1>Some text....</h1>
        <h2>Some smaller text....</h2>
    </div>
</div>
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Some text..."),
    React.createElement("h2", {}, "Some smaller text..."),
  ])
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);

// To make it look a lot less complex, we would be using JSX.
