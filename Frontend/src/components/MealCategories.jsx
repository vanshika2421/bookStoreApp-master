// import React, { useEffect, useState } from 'react';

// const MealCategories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//         const data = await response.json();
//         setCategories(data.categories);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching meal categories:", error);
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="loader">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Meal Categories</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {categories.map((category) => (
//             <div
//               key={category.idCategory}
//               className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               <img
//                 src={category.strCategoryThumb}
//                 alt={category.strCategory}
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.strCategory}</h3>
//                 <p className="text-gray-600 text-sm">{category.strCategoryDescription.slice(0, 100)}...</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MealCategories;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MealCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meal categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Meal Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.idCategory}
              to={`/category/${category.strCategory}`}  // Link to the category page
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.strCategory}</h3>
                <p className="text-gray-600 text-sm">{category.strCategoryDescription.slice(0, 100)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealCategories;

