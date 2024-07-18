import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RecipeDetail from "./Pages/RecipeDetail";
import NewRecipe from "./Pages/NewRecipe";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import Redirect from "./Components/Redirect";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index path="/" element={<PrivateRoute>
            <Home />
          </PrivateRoute> } />
          <Route path="/login" element={ <Redirect>  <Login /> </Redirect>} />
          <Route path="/register" element={<Redirect>
            <Register />
          </Redirect> } />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/new-recipe" element={<NewRecipe />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
