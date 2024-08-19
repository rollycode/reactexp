const element = React.createElement(
  "h1",
  { id: "heading", xyz: "hbcjhbj" },
  "hello word with react"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    element,
    React.createElement("h1", {}, "i am the h1 element "),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
