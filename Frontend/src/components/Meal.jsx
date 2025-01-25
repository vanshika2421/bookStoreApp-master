// import React, { useState } from "react";

// function Meal() {
//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchRandomMeal = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
//       const data = await response.json();
//       setMeal(data.meals[0]); // Access the first meal in the array
//     } catch (error) {
//       console.error("Error fetching the meal:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="text-center">
//       <button
//         onClick={fetchRandomMeal}
//         className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-6"
//       >
//         Get Random Meal
//       </button>

//       {loading && <p className="text-lg text-gray-500">Loading...</p>}

//       {meal && (
//         <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">{meal.strMeal}</h2>
//           <img
//             src={meal.strMealThumb}
//             alt={meal.strMeal}
//             className="w-full h-80 object-cover rounded-lg mb-6"
//           />
//           <h3 className="text-xl text-gray-600 mb-2">Category: {meal.strCategory}</h3>
//           <h3 className="text-xl text-gray-600 mb-4">Cuisine: {meal.strArea}</h3>
//           <p className="text-lg text-gray-700 mb-6"><strong>Instructions:</strong> {meal.strInstructions}</p>

//           <h4 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h4>
//           <ul className="list-disc list-inside text-lg text-gray-700">
//             {Array.from({ length: 20 }).map((_, i) => {
//               const ingredient = meal[`strIngredient${i + 1}`];
//               const measure = meal[`strMeasure${i + 1}`];
//               return ingredient ? (
//                 <li key={i}>
//                   {ingredient} - {measure}
//                 </li>
//               ) : null;
//             })}
//           </ul>

//           {meal.strYoutube && (
//             <div className="mt-6">
//               <h4 className="text-xl text-gray-800 mb-2">Video Tutorial:</h4>
//               <a
//                 href={meal.strYoutube}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 Watch on YouTube
//               </a>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Meal;

// import React, { useState, useEffect } from "react";

// function Meal() {
//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [clicksLeft, setClicksLeft] = useState(3); // Track the number of times the button can be clicked
//   const [checkedIngredients, setCheckedIngredients] = useState([]); // Track checked ingredients

//   const fetchRandomMeal = async () => {
//     if (clicksLeft <= 0) return; // Don't fetch new meal if no clicks are left

//     setLoading(true);
//     setClicksLeft((prev) => prev - 1); // Decrease remaining clicks by 1
//     try {
//       const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
//       const data = await response.json();
//       setMeal(data.meals[0]); // Access the first meal in the array
//     } catch (error) {
//       console.error("Error fetching the meal:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCheckboxChange = (ingredient) => {
//     setCheckedIngredients((prevChecked) =>
//       prevChecked.includes(ingredient)
//         ? prevChecked.filter((i) => i !== ingredient)
//         : [...prevChecked, ingredient]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-black flex justify-center items-center p-4">
//       <div className="w-full max-w-screen-lg bg-white text-gray-900 rounded-lg shadow-2xl p-8">
//         <button
//           onClick={fetchRandomMeal}
//           className="w-full bg-[#7f5539] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#6a452e] transition duration-300 mb-8 focus:outline-none"
//           disabled={clicksLeft <= 0} // Disable the button if no clicks are left
//         >
//           Get Random Meal
//         </button>

//         {/* Display how many clicks are left */}
//         <p className="text-center text-xl text-gray-800 mb-6">
//           {clicksLeft > 0
//             ? `You have ${clicksLeft} ${clicksLeft === 1 ? "click" : "clicks"} left`
//             : "You've used all your clicks for today!"}
//         </p>

//         {loading && <p className="text-lg text-gray-500 text-center">Loading...</p>}

//         {meal && (
//           <div className="space-y-8">
//             <h2 className="text-4xl font-bold text-green-700 text-center">{meal.strMeal}</h2>

//             <div className="flex justify-center mb-6">
//               <img
//                 src={meal.strMealThumb}
//                 alt={meal.strMeal}
//                 className="w-64 h-64 object-cover rounded-xl shadow-lg"
//               />
//             </div>

//             <div className="space-y-6">
//               <h3 className="text-xl text-gray-800">Category: <span className="font-semibold text-green-700">{meal.strCategory}</span></h3>
//               <h3 className="text-xl text-gray-800">Cuisine: <span className="font-semibold text-green-700">{meal.strArea}</span></h3>

//               {/* Smaller instructions text */}
//               <p className="text-md text-gray-700 leading-relaxed mb-6">
//                 <strong className="text-green-700">Instructions:</strong> {meal.strInstructions.substring(0, 200)}...
//               </p>

//               <h4 className="text-xl font-semibold text-gray-800">Ingredients:</h4>
//               <ul className="grid grid-cols-2 gap-4 text-lg text-gray-700">
//                 {Array.from({ length: 20 }).map((_, i) => {
//                   const ingredient = meal[`strIngredient${i + 1}`];
//                   const measure = meal[`strMeasure${i + 1}`];
//                   return ingredient ? (
//                     <li key={i} className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={checkedIngredients.includes(ingredient)}
//                         onChange={() => handleCheckboxChange(ingredient)}
//                         className="form-checkbox text-green-700"
//                       />
//                       <span>
//                         <span className="font-semibold">{ingredient}</span> - {measure}
//                       </span>
//                     </li>
//                   ) : null;
//                 })}
//               </ul>

//               {meal.strYoutube && (
//                 <div className="mt-6 text-center">
//                   <h4 className="text-xl text-gray-800 mb-2">Video Tutorial:</h4>
//                   <a
//                     href={meal.strYoutube}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#7f5539] hover:underline"
//                   >
//                     Watch on YouTube
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Meal;

import React, { useState, useEffect } from "react";

function Meal() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clicksLeft, setClicksLeft] = useState(3); // Track the number of times the button can be clicked
  const [checkedIngredients, setCheckedIngredients] = useState([]); // Track checked ingredients

  const fetchRandomMeal = async () => {
    if (clicksLeft <= 0) return; // Don't fetch new meal if no clicks are left

    setLoading(true);
    setClicksLeft((prev) => prev - 1); // Decrease remaining clicks by 1
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await response.json();
      setMeal(data.meals[0]); // Access the first meal in the array
    } catch (error) {
      console.error("Error fetching the meal:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (ingredient) => {
    setCheckedIngredients((prevChecked) =>
      prevChecked.includes(ingredient)
        ? prevChecked.filter((i) => i !== ingredient)
        : [...prevChecked, ingredient]
    );
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4">
      <div className="w-full max-w-screen-lg bg-white text-gray-900 rounded-lg shadow-2xl p-8">
        <button
          onClick={fetchRandomMeal}
          className="w-full bg-[#7f5539] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#6a452e] transition duration-300 mb-8 focus:outline-none"
          disabled={clicksLeft <= 0} // Disable the button if no clicks are left
        >
          Get Recipes of the day 
        </button>

        {/* Display how many clicks are left */}
        <p className="text-center text-xl text-gray-800 mb-6">
          {clicksLeft > 0
            ? `You have ${clicksLeft} ${clicksLeft === 1 ? "recipe" : "recipes"} left`
            : "You've seen all your recipes for today!"}
        </p>

        {loading && <p className="text-lg text-gray-500 text-center">Loading...</p>}

        {meal && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-green-700 text-center">{meal.strMeal}</h2>

            <div className="flex justify-center mb-6">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl text-gray-800">Category: <span className="font-semibold text-green-700">{meal.strCategory}</span></h3>
              <h3 className="text-xl text-gray-800">Cuisine: <span className="font-semibold text-green-700">{meal.strArea}</span></h3>

              {/* Smaller instructions text */}
              <p className="text-md text-gray-700 leading-relaxed mb-6">
                <strong className="text-green-700">Instructions:</strong> {meal.strInstructions.substring(0, 200)}...
              </p>

              <h4 className="text-xl font-semibold text-gray-800">Ingredients:</h4>
              <ul className="grid grid-cols-3 gap-4 text-lg text-gray-700">
                {Array.from({ length: 20 }).map((_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  const measure = meal[`strMeasure${i + 1}`];
                  return ingredient ? (
                    <li key={i} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={checkedIngredients.includes(ingredient)}
                        onChange={() => handleCheckboxChange(ingredient)}
                        className="form-checkbox text-green-700"
                      />
                      <span>
                        <span className="font-semibold">{ingredient}</span> - {measure}
                      </span>
                    </li>
                  ) : null;
                })}
              </ul>

              {meal.strYoutube && (
                <div className="mt-6 text-center">
                  <h4 className="text-xl text-gray-800 mb-2">Video Tutorial:</h4>
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7f5539] hover:underline"
                  >
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Meal;
