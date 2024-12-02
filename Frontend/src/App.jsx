import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import BuyNow from "./components/BuyNow"; // Import the BuyNow component
import MealCategories from "./components/MealCategories";
import SearchByName from "./components/SearchByName";
import Meal from "./components/Meal";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import RecipePage from "./components/RecipePage"; // Import the RecipePage component

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
            
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/buy-now" element={<BuyNow />} /> {/* Add BuyNow route */}

          
          {/* Add MealCategories Route */}
          <Route path="/meal-categories" element={<MealCategories />} />
          
          {/* Add RecipePage Route (dynamic based on category) */}
          <Route path="/category/:category" element={<RecipePage />} />

        </Routes>
        <Toaster />
        <Meal /> 
        <SearchByName />
        

      </div>
    </>
  );
}

export default App;
