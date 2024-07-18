import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeById } from "../services/recipeService";
import noImage from '/no-image.jpeg'
const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  
  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await getRecipeById(id);
      setRecipe(recipeData);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
  <div className="max-w-3xl mx-auto my-8 p-6 bg-white text-gray-900 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
    <div className=""> <Link to={'/'}>
    <button className="text-white mb-2 px-6 hover:bg-gray-700">Back</button> 
    </Link> 
  <h2 className="text-3xl capitalize font-extrabold mb-6 text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
    {recipe.title}
  </h2></div>
  
  <img src={recipe.photoUrl || noImage} alt={recipe.title} className="w-32 mb-6 rounded-lg shadow-md" />
  <p className="mb-3 font-normal text-gray-700 ">{recipe.description}</p>
  <div className="border-gray-700 border p-5 my-2 rounded-xl">
  <h3 className="text-3xl font-bold mb-3">Ingredients</h3>
  <ul className="list-disc list-inside mb-3 font-normal text-gray-700  space-y-2">
    {recipe.ingredients.map((ingredient, index) => (
      <li key={index} className="text-lg">{ingredient}</li>
    ))}
  </ul>
  </div>
  
  <h3 className="text-2xl font-bold mb-3">Instructions</h3>
  <p className="mb-3 font-normal text-gray-700">{recipe.instructions}</p>

  <h3 className="text-2xl font-bold mb-3">Category</h3>
  <p className="mb-3 font-normal text-gray-700">{recipe.category}</p>
  
</div>

  );
};

export default RecipeDetail;
