import React from "react";
import HocList from "./HocList";
import ListComponent from "./ListComponent";

const list1 = [1, 2, 3, 4, 5, 6, 7];
const list2 = [3, 2, 4, 5, 6, 8];

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HocList list={list1} component={ListComponent} />
      <HocList list={list1} component={ListComponent} />
      <HocList list={list2} component={ListComponent} />
    </div>
  );
};

export default App;
