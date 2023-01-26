import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./components/Page";

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="header">Short Assignment</h1>
        <Page />;
      </>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
