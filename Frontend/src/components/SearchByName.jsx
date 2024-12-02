import React, { useState, useEffect } from 'react';

const SearchByName = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch recipe by name (Arrabiata)
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
        const data = await response.json();
        setRecipe(data.meals[0]);  // Set the first meal from the result
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, []);

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  // If no recipe found, show a message
  if (!recipe) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-gray-800">Recipe not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Recipe Image */}
            <div className="md:w-1/2">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Recipe Details */}
            <div className="md:w-1/2 p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.strMeal}</h1>
              <p className="text-xl text-gray-600 mb-2">
                <span className="font-semibold">Category:</span> {recipe.strCategory}
              </p>
              <p className="text-xl text-gray-600 mb-2">
                <span className="font-semibold">Area:</span> {recipe.strArea}
              </p>

              {/* Ingredients */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ingredients</h2>
                <ul className="list-inside list-disc text-gray-700">
                  {Array.from({ length: 20 }).map((_, index) => {
                    const ingredient = recipe[`strIngredient${index + 1}`];
                    const measure = recipe[`strMeasure${index + 1}`];
                    if (ingredient && ingredient !== "") {
                      return (
                        <li key={index} className="mb-1">
                          {measure} {ingredient}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>

              {/* Instructions */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructions</h2>
                <p className="text-gray-700">{recipe.strInstructions}</p>
              </div>

              {/* YouTube Video */}
              {recipe.strYoutube && (
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Watch the Video</h2>
                  <a
                    href={recipe.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByName;
