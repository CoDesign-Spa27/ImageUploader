import React from "react";
import RecipeList from '../Components/RecipeList'
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10">
      <Navbar />
      
      <RecipeList />
    </div>
  );
};

export default Home;
