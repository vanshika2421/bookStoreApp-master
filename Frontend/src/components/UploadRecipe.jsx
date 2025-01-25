import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

// Component to handle dynamic ingredient input
function IngredientsInput({ ingredients, setIngredients }) {
  const handleChange = (index, e) => {
    const values = [...ingredients];
    values[index][e.target.name] = e.target.value;
    setIngredients(values);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { ingredient: '', quantity: '' }]);
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
          <button
            type="button"
            onClick={() => handleRemoveIngredient(index)}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddIngredient}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Add Ingredient
      </button>
    </div>
  );
}

// Timer component for cooking steps
function Timer({ stepNumber, handleTimeChange }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const startTimer = () => {
    setRunning(true);
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleTimeInputChange = (e) => {
    const timeValue = e.target.value;
    setTime(timeValue);
    handleTimeChange(stepNumber, timeValue); // Inform parent component of time change
  };

  return (
    <div>
      <label>Step {stepNumber} Timer (in seconds):</label>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          value={time}
          onChange={handleTimeInputChange}
          className="w-24 p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={startTimer}
          disabled={running}
          className={`p-2 rounded-md ${running ? 'bg-gray-500' : 'bg-green-500'} text-white`}
        >
          {running ? 'Timer Running' : 'Start Timer'}
        </button>
      </div>
    </div>
  );
}

// Main Upload Recipe Form Component
function UploadRecipe() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [ingredients, setIngredients] = useState([{ ingredient: "", quantity: "" }]);
  const [timerSteps, setTimerSteps] = useState([{ step: 1, time: 0 }]);
  const [progress, setProgress] = useState(0);  // Track progress

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleTimeChange = (step, time) => {
    const updatedTimerSteps = timerSteps.map((t) =>
      t.step === step ? { ...t, time } : t
    );
    setTimerSteps(updatedTimerSteps);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', data.title);
    formData.append('ingredients', JSON.stringify(ingredients));
    formData.append('instructions', data.instructions);
    formData.append('category', data.category);

    // For timers, add timer data (you could also map this to each step)
    formData.append('timers', JSON.stringify(timerSteps));

    try {
      await axios.post('http://localhost:4001/recipe/upload', formData);
      alert('Recipe uploaded successfully');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const totalFields = 6;  // Image, title, ingredients, instructions, category, timers
    const filledFields = [
      image && true,
      document.querySelector('input[name="title"]').value,
      ingredients.some(ing => ing.ingredient && ing.quantity),
      document.querySelector('textarea[name="instructions"]').value,
      document.querySelector('input[name="category"]').value,
      timerSteps.every(step => step.time > 0),
    ].filter(Boolean).length;

    setProgress((filledFields / totalFields) * 100);
  }, [ingredients, image, timerSteps]); // Re-run when ingredients, image, or timerSteps change

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Upload Recipe</h2>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="text-gray-500">Progress: {Math.round(progress)}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              style={{ width: `${progress}%` }}
              className="bg-green-500 h-2 rounded-full"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <input
              {...register('title', { required: 'Title is required' })}
              placeholder="Recipe Title"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
          </div>

          {/* Recipe Image Upload */}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {imagePreview && (
              <div className="mt-2">
                <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-md" />
              </div>
            )}
            <p className="text-gray-500 text-sm">Supported formats: JPG, PNG, GIF</p>
          </div>

          {/* Ingredients Section */}
          <IngredientsInput
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          
          {/* Instructions */}
          <div>
            <textarea
              {...register('instructions', { required: 'Instructions are required' })}
              placeholder="Instructions"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.instructions && <span className="text-red-500 text-sm">{errors.instructions.message}</span>}
          </div>

          {/* Category */}
          <div>
            <input
              {...register('category', { required: 'Category is required' })}
              placeholder="Category (e.g., Dessert)"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
          </div>

          {/* Timer Input for each step */}
          {timerSteps.map((step, index) => (
            <Timer
              key={index}
              stepNumber={step.step}
              handleTimeChange={handleTimeChange}
            />
          ))}
          
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 mt-4 rounded-md"
          >
            Upload Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadRecipe;
