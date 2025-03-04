import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Exploremenu from "../../components/ExploreMenu/Exploremenu";
import FoodDisplay from "../../components/Food Display/FoodDisplay";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
