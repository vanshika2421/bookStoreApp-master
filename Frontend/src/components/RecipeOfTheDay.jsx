// import React, { useState, useEffect } from "react";

// function RecipeOfTheDay() {
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch a random recipe from the API
//   const fetchRecipe = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
//       const data = await response.json();
//       setRecipe(data.meals[0]); // Access the first recipe in the array
//     } catch (error) {
//       console.error("Error fetching the recipe:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Automatically fetch a new recipe every 24 hours
//   useEffect(() => {
//     fetchRecipe(); // Fetch immediately on mount
//     const interval = setInterval(() => {
//       fetchRecipe();
//     }, 24 * 60 * 60 * 1000); // 24 hours

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   return (
//     <section className="bg-gradient-to-r from-green-100 via-white to-green-100 py-10 px-6 md:px-20 rounded-lg shadow-lg">
//       <h2 className="text-4xl font-extrabold text-green-800 text-center mb-8">
//         🍲 Recipe of the Day
//       </h2>

//       {loading && (
//         <p className="text-lg text-gray-500 text-center">Fetching today's delicious inspiration...</p>
//       )}

//       {recipe && (
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Recipe Image */}
//           <img
//             src={recipe.strMealThumb}
//             alt={recipe.strMeal}
//             className="w-full h-64 object-cover"
//           />

//           {/* Recipe Content */}
//           <div className="p-6 space-y-4">
//             <h3 className="text-2xl font-bold text-gray-800">{recipe.strMeal}</h3>
//             <p className="text-gray-600 text-sm">
//               <span className="font-semibold">Category:</span> {recipe.strCategory}
//             </p>
//             <p className="text-gray-600 text-sm">
//               <span className="font-semibold">Cuisine:</span> {recipe.strArea}
//             </p>

//             <p className="text-gray-700">
//               <span className="font-semibold">Instructions:</span> {recipe.strInstructions.substring(0, 150)}...
//             </p>

//             {/* Ingredients List */}
//             <div className="space-y-2">
//               <h4 className="text-lg font-semibold text-gray-800">Ingredients:</h4>
//               <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
//                 {Array.from({ length: 20 }).map((_, i) => {
//                   const ingredient = recipe[`strIngredient${i + 1}`];
//                   const measure = recipe[`strMeasure${i + 1}`];
//                   return ingredient ? (
//                     <li key={i} className="flex items-center gap-1">
//                       <span className="text-green-700">✔</span> {ingredient} - {measure}
//                     </li>
//                   ) : null;
//                 })}
//               </ul>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-between items-center mt-6">
//               {recipe.strYoutube && (
//                 <a
//                   href={recipe.strYoutube}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white bg-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
//                 >
//                   Watch Tutorial
//                 </a>
//               )}

//               <button
//                 onClick={fetchRecipe}
//                 className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300"
//               >
//                 Try Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default RecipeOfTheDay;

import React, { useState, useEffect } from "react";

function RecipeOfTheDay() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch a random recipe from the API
  const fetchRecipe = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await response.json();
      console.log(data); // Log the API response for debugging
      if (data.meals && data.meals[0]) {
        setRecipe(data.meals[0]); // Access the first recipe in the array
      } else {
        console.error("No meals found in API response.");
      }
    } catch (error) {
      console.error("Error fetching the recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  // Automatically fetch a new recipe every 24 hours
  useEffect(() => {
    fetchRecipe(); // Fetch immediately on mount
    const interval = setInterval(() => {
      fetchRecipe();
    }, 24 * 60 * 60 * 1000); // 24 hours

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8">🍲 Recipe of the Day</h2>

      {loading ? (
        <p className="text-lg text-gray-500 text-center">Fetching today's delicious inspiration...</p>
      ) : (
        recipe && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Recipe Image */}
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-64 object-cover"
            />

            {/* Recipe Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">{recipe.strMeal}</h3>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Category:</span> {recipe.strCategory}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Cuisine:</span> {recipe.strArea}
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Instructions:</span> {recipe.strInstructions.substring(0, 150)}...
              </p>

              {/* Ingredients List */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-800">Ingredients:</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const ingredient = recipe[`strIngredient${i + 1}`];
                    const measure = recipe[`strMeasure${i + 1}`];
                    return ingredient ? (
                      <li key={i} className="flex items-center gap-1">
                        <span className="text-green-700">✔</span> {ingredient} - {measure}
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-6">
                {recipe.strYoutube && (
                  <a
                    href={recipe.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
                  >
                    Watch Tutorial
                  </a>
                )}

                <button
                  onClick={fetchRecipe}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default RecipeOfTheDay;

