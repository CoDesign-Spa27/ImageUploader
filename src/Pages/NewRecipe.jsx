import React, { useState } from "react";
import { addRecipe } from "../services/recipeService";
import ImageUpload from "../Components/ImageUpload";
import HomeButton from "../Components/HomeButton";

const NewRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRecipe({
      title,
      description,
      ingredients: ingredients.split(","),
      instructions,
      category,
      photoUrl,
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    <HomeButton />
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Recipe</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-semibold" htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none rounded-xl"
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-semibold" htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter recipe description"
          className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
          rows="3"
          required
        ></textarea>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-semibold" htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients, separated by commas"
          className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
          rows="3"
          required
        ></textarea>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-semibold" htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Enter cooking instructions"
          className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
          rows="4"
          required
        ></textarea>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-semibold" htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter recipe category"
          className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-semibold">Photo</label>
        <ImageUpload setPhotoUrl={setPhotoUrl} />
      </div>
      
      <button type="submit" className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300">Add Recipe</button>
    </form>
  </div>
  );
};

export default NewRecipe;
