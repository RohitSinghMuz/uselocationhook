import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pageone = () => {
  const [data, setdata] = useState([]);

  const navigate = useNavigate();
  const getdata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((adata) => setdata(adata));
  };
  useEffect(() => {
    getdata();
  }, []);

  const goToHomePage = () => {
    navigate("/home", { state: data });
  };
  return (
    <>
      <div style={{ width: "30%", margin: "10px auto" }}>
        <button
          onClick={goToHomePage}
          style={{ padding: "15px", margin: "10px" }}
        >
          Getdata
        </button>
        <h2>Pageone</h2>
      </div>
    </>
  );
};

export default Pageone;
