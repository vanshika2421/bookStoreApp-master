import React, { useState } from 'react';

function IngredientsInput() {
  const [ingredients, setIngredients] = useState([{ ingredient: "", quantity: "" }]);

  const handleChange = (index, e) => {
    const values = [...ingredients];
    values[index][e.target.name] = e.target.value;
    setIngredients(values);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { ingredient: "", quantity: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };

  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex space-x-2 mb-2">
          <input
            name="ingredient"
            value={ingredient.ingredient}
            onChange={(e) => handleChange(index, e)}
            placeholder="Ingredient"
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          />
          <input
            name="quantity"
            value={ingredient.quantity}
            onChange={(e) => handleChange(index, e)}
            placeholder="Quantity"
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          />
          <button type="button" onClick={() => handleRemoveIngredient(index)} className="bg-red-500 text-white p-2 rounded-md">Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAddIngredient} className="bg-blue-500 text-white p-2 rounded-md">Add Ingredient</button>
    </div>
  );
}

export default IngredientsInput;
