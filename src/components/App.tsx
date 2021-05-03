import * as React from "react";
import HorizontalTree from "./HorizontalTree";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <HorizontalTree width={1000} height={500} />
    </Layout>
  );
};

export default App;
