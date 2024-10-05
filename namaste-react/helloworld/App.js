import React from "react";
import ReactDOM from "react-dom/client";

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

// Using JSX; JSX is not HTML inside JS but HTML like syntax.
// JSX attributes need to be in camelCase format.
const jsxHeading = (
  <h1 id="heading-jsx" className="head" tabIndex="1">
    Hello World using JSX
  </h1>
);
console.log(jsxHeading);
const anchorTag = <a href="https://www.google.com">Click Me</a>;

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
//root3.render(jsxHeading);
root3.render([jsxHeading, anchorTag]);

// React Functional Component
// It is a JS function which returns JSX code.
const HeadingComponent = () => {
  return (
    <h1 className="heading">Hello World From React Functional Component</h1>
  );
};

// It can also be written as follows;
// const HeadingComponent = () => <h1>Hello World From React Functional Component</h1>;
// or
// const HeadingComponent = () => (<h1 className="heading">Hello World From React Functional Component</h1>);

console.log(HeadingComponent);

const HeadingComponent2 = () => (
  <div id="container">
    <h1 className="heading">Hello World From React Functional Component</h1>
  </div>
);
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<HeadingComponent2 />);

const AnchorTagComponent2 = () => <a href="https://www.google.com">Click Me</a>;
const number = 10000;
const spanElement = <span>Hello World</span>;
const jsxHeading1 = (
  <h3 id="heading-jsx" className="head" tabIndex="1">
    {spanElement}
    <br />
    Hello World using JSX
  </h3>
);
const HeadingComponent3 = () => (
  <div id="container">
    <h2 className="heading">
      Hello World From React Functional Component With Sub components and JS
      expressions
    </h2>
    {jsxHeading1} <br />
    {number} <br />
    {100 + 100} <br />
    <AnchorTagComponent2 />
  </div>
);

const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(<HeadingComponent3 />);

// Even React Functional Component can be rendered inside JSX
/*
const titleContainer1 = (
  <div id="title-container">
  <h1 id="heading-jsx" className="head" tabIndex="1">
    Hello World using React FunctionalComponent inside JSX
  </h1>  
  <br/ >
  <HeadingComponent3/>
  </div>
);
const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(titleContainer1);
*/
