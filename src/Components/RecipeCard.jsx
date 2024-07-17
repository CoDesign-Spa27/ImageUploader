import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import noImage from "../../public/no-image.jpeg";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-xl p-6 flex flex-col lg:flex-row transform transition-transform duration-300 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow text-gray-900">
      <div className="lg:w-1/3 flex items-center justify-center">
        <img className="w-full rounded-xl object-cover" src={recipe.photoUrl || noImage} alt={recipe.title} />
      </div>

      <div className="lg:w-2/3 flex flex-col justify-between p-6">
        <div>
          <div className=" text-2xl font-bold tracking-tight text-gray-900 capitalize">{recipe.title}</div>
          <div className="flex py-3 gap-2 items-center">
            <h1 className="text-base font-bold">Category-</h1>
            <p className="text-sm">{recipe.category}</p>
          </div>
        </div>

        <div className="flex gap-5">
          <Link to={`/recipe/${recipe.id}`}>
            <button className="inline-flex items-center px-5 py-2 text-sm font-medium text-center bg-pink-400 rounded-lg text-gray-900 hover:text-white focus:outline-none">
              View Recipe
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </Link>

          <FavoriteButton recipeId={recipe.id} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
