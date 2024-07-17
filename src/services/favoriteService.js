// src/services/favoriteService.js
import { db, auth } from "./firebaseConfig";
import { collection, addDoc, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";

const getFavoritesCollection = () => {
  const user = auth.currentUser;
  return collection(db, "users", user.uid, "favorites");
};

export const addFavorite = async (recipeId) => {
  const favoritesCollection = getFavoritesCollection();
  await addDoc(favoritesCollection, { recipeId });
};

export const removeFavorite = async (recipeId) => {
  const favoritesCollection = getFavoritesCollection();
  const q = query(favoritesCollection, where("recipeId", "==", recipeId));
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

export const isFavorite = async (recipeId) => {
  const favoritesCollection = getFavoritesCollection();
  const q = query(favoritesCollection, where("recipeId", "==", recipeId));
  const snapshot = await getDocs(q);
  return !snapshot.empty;
};
