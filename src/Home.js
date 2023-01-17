import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <h2>Home page</h2>
      {location.state?.map((item, index) => {
        return (
          <div>
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Home;
