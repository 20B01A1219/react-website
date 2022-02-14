import React from "react";
import ReactDom from "react-dom";
import Navbar from "./navbar";
import Introduction from "./Introduction";
import Features from "./features";
function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Features
        heading="Declarative"
        para1="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
        para2 = "Declarative views make your code more predictable and easier to debug"
      />
      <Features
        heading="Component-Based"
        para1="Build encapsulated components that manage their own state, then compose them to make complex UIs."
        para2 = "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
      />
      <Features heading = "Learn Once, Write Anywhere"
      para1 = "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code." para2 = "React can also render on the server using Node and power mobile apps using React Native." />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
