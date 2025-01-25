// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function RecipeLinkPage() {
//   const [recipe, setRecipe] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
//         const data = await response.json();
//         setRecipe(data.meals[0]);
//       } catch (error) {
//         console.error("Error fetching the recipe:", error);
//       }
//     };

//     fetchRecipe();
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-green-100 to-white min-h-screen flex items-center justify-center p-6">
//       <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="p-6 text-center">
//           <h1 className="text-4xl font-bold text-green-700 mb-4">Discover Your Recipe of the Day</h1>
//           <p className="text-gray-600 text-lg italic mb-6">"Cooking is an art. Your next masterpiece is just one recipe away!"</p>

//           {recipe && (
//             <div className="mb-6">
//               <img
//                 src={recipe.strMealThumb}
//                 alt={recipe.strMeal}
//                 className="w-full h-60 object-cover rounded-lg mb-4 shadow-md"
//               />
//               <h2 className="text-2xl font-semibold text-gray-800">{recipe.strMeal}</h2>
//               <p className="text-gray-500 mt-2">Category: {recipe.strCategory} | Cuisine: {recipe.strArea}</p>
//             </div>
//           )}

//           <button
//             onClick={() => navigate("/Meal")}
//             className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
//           >
//             Go to Recipe of the Day
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeLinkPage;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeLinkPage() {
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await response.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Error fetching the recipe:", error);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <div className="w-full h-1/4 bg--white p-4 flex items-center justify-center">
      <div className="max-w-screen-md w-full bg-white rounded-lg shadow-lg overflow-hidden p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-700 mb-2">Recipe of the Day</h1>
          <p className="text-gray-600 text-sm italic mb-4">
            "Cooking is an art. Your next masterpiece is just one recipe away!"
          </p>

          {recipe && (
            <div className="mb-4">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
              />
              <h2 className="text-lg font-semibold text-gray-800">{recipe.strMeal}</h2>
              <p className="text-gray-500 text-sm mt-1">Category: {recipe.strCategory} | Cuisine: {recipe.strArea}</p>
            </div>
          )}

          <button
            onClick={() => navigate("/Meal")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300 mt-4"
          >
            Go to Recipe of the Day
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeLinkPage;
