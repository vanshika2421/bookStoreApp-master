import React, { useState } from "react";

function Meal() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomMeal = async () => {
    setLoading(true);
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

  return (
    <div className="text-center">
      <button
        onClick={fetchRandomMeal}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-6"
      >
        Get Random Meal
      </button>

      {loading && <p className="text-lg text-gray-500">Loading...</p>}

      {meal && (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{meal.strMeal}</h2>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl text-gray-600 mb-2">Category: {meal.strCategory}</h3>
          <h3 className="text-xl text-gray-600 mb-4">Cuisine: {meal.strArea}</h3>
          <p className="text-lg text-gray-700 mb-6"><strong>Instructions:</strong> {meal.strInstructions}</p>

          <h4 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700">
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = meal[`strIngredient${i + 1}`];
              const measure = meal[`strMeasure${i + 1}`];
              return ingredient ? (
                <li key={i}>
                  {ingredient} - {measure}
                </li>
              ) : null;
            })}
          </ul>

          {meal.strYoutube && (
            <div className="mt-6">
              <h4 className="text-xl text-gray-800 mb-2">Video Tutorial:</h4>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Meal;
