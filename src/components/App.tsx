import * as React from "react";
import HorizontalTree from "./HorizontalTree";
import Layout from "./Layout";
import useResponsive from "./hooks/useResponsive";

const App = () => {
  // const [counter, setCounter] = React.useState(0);

  // const handleClick = (clickType: "ADD" | "SUBTRACT") => {
  //   if (clickType === "ADD") {
  //     setCounter(counter + 1);
  //   } else {
  //     if (counter > 0) {
  //       setCounter(counter - 1);
  //     } else {
  //       alert("Sorry, negatives aren't allowed");
  //     }
  //   }
  // };

  const { windowWidth, screenType } = useResponsive();

  const chartSizes = () => {
    if (screenType === "DESKTOP") {
      return {
        width: 1200,
        height: 500,
      };
    } else if (screenType === "TABLET") {
      return {
        width: windowWidth * 0.8,
        height: 400,
      };
    } else if (screenType === "MOBILE") {
      return {
        width: windowWidth * 0.8,
        height: 300,
      };
    } else {
      return {
        width: 0,
        height: 0,
      };
    }
  };

  return (
    <Layout>
      {/* <h1>{windowWidth}</h1>
      <h1>{screenType}</h1> */}
      {/* <h1>Count: {counter}</h1>
      <button onClick={() => handleClick("ADD")}>Add</button>
      <button onClick={() => handleClick("SUBTRACT")}>Subtract</button> */}
      <HorizontalTree width={chartSizes().width} height={chartSizes().height} />
    </Layout>
  );
};

export default App;
