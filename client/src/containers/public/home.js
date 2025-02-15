import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Header />
      <Navigation />
      <div className="w-[1100px] flex flex-col items-center justify-start">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
