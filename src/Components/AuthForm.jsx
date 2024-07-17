import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const AuthForm = ({ isLogin }) => {
  const { login, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(email, password);
      }
 
      navigate("/"); 
    } catch (error) {
   
      console.error("Authentication error:", error);
    }
  };

  return (
    <section className=" grid sm:grid-cols-2 h-screen">
      <div className="col-span-1 sm:flex hidden flex-col bg-yellow-100 justify-center items-center">
        <h2 className="text-green-300 text-3xl text-center font-bold">Share Your Culinary Creations</h2>
        <h3 className="text-red-300 text-center text-xl font-bold">Discover, Create, and Share Recipes with Food Lovers Everywhere!</h3>
      </div>
    
      <div className=" col-span-1">

      <main
      class="flex items-center justify-center px-8 py-8 sm:px-12  lg:px-16 lg:py-12 "
    >
      <div class="max-w-xl lg:max-w-3xl">
      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
  <div className="col-span-6">
    <h2 className="text-2xl mb-4">{isLogin ? "Login" : "Register"}</h2>
  </div>

  <div className="col-span-6 ">
    <label htmlFor="Email" className="block text-sm font-medium ">Email</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    />
  </div>

  <div className="col-span-6 ">
    <label htmlFor="Password" className="block text-sm font-medium">Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    />
  </div>

  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
 
    <button
      type="submit"
      className="inline-block shrink-0 rounded-md border border-green-400 bg-green-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:border-green-400 hover:text-green-400 focus:outline-none focus:ring active:text-green-400"
    >
      {isLogin ? "Login" : "Register"}
    </button>
 
 

    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
      Already have an account?
      <a href="#" className=" underline">{!isLogin ? "Login" : "Register"}</a>.
    </p>
  </div>
</form>

    </div>
</main>
      </div>
    
    
    </section>
   
  );
};

export default AuthForm;
