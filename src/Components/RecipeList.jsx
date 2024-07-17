import React, { useEffect, useState } from "react";
import { getRecipes } from "../services/recipeService";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesData = await getRecipes();
      setRecipes(recipesData);
      setFilteredRecipes(recipesData);
    };
    fetchRecipes();
  }, []);

  const handleSearch = (searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = recipes.filter(
      (recipe) =>
        recipe.category.toLowerCase().includes(lowerCaseTerm) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(lowerCaseTerm)
        )
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:p-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
