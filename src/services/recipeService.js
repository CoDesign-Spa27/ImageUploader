import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";

const recipesCollection = collection(db, "recipes");

export const addRecipe = async (recipe) => {
  return await addDoc(recipesCollection, recipe);
};

export const getRecipes = async () => {
  const snapshot = await getDocs(recipesCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getRecipeById = async (id) => {
  const recipeDoc = await getDoc(doc(recipesCollection, id));
  return { id: recipeDoc.id, ...recipeDoc.data() };
};

export const getRecipesByCategory = async (category) => {
  const q = query(recipesCollection, where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getRecipesByIngredient = async (ingredient) => {
  const q = query(recipesCollection, where("ingredients", "array-contains", ingredient));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
