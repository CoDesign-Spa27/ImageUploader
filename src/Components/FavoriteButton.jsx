// src/components/FavoriteButton.jsx
import React, { useState, useEffect } from "react";
import { addFavorite, removeFavorite, isFavorite } from "../services/favoriteService";

const FavoriteButton = ({ recipeId }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      const favorite = await isFavorite(recipeId);
      setIsFav(favorite);
    };
    checkFavorite();
  }, [recipeId]);

  const handleFavorite = async () => {
    if (isFav) {
      await removeFavorite(recipeId);
    } else {
      await addFavorite(recipeId);
    }
    setIsFav(!isFav);
  };

  return (
    <button
      onClick={handleFavorite}
      className={`px-3 py-2 text-sm font-medium text-center hover:text-black  rounded-lg text-gray-900 focus:outline-none ${isFav ? "bg-red-300 text-white" : "bg-gray-200"}`}
    >
      {isFav ? "Unfavorite" : "Favorite"}
    </button>
  );
};

export default FavoriteButton;
