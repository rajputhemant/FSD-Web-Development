import React from "react";
import Header from "./component/Header";
import Currency from "./component/Corrency";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Currency />
    </>
  );
};

export default App;

