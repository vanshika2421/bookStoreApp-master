// // import React from "react";

// // const BuyNow = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
// //       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
// //         <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
// //           Buy Now
// //         </h1>
// //         <form className="space-y-4">
// //           <div>
// //             <label className="block text-gray-700 font-medium mb-2">
// //               Medicine Name
// //             </label>
// //             <input
// //               type="text"
// //               className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //               placeholder="Enter medicine name"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700 font-medium mb-2">
// //               Quantity
// //             </label>
// //             <input
// //               type="number"
// //               className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //               placeholder="Enter quantity"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700 font-medium mb-2">
// //               Address
// //             </label>
// //             <textarea
// //               className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //               rows="3"
// //               placeholder="Enter your address"
// //             ></textarea>
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
// //           >
// //             Place Order
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BuyNow;

// import React from "react";
// import { useLocation } from "react-router-dom";

// const BuyNow = () => {
//   const location = useLocation();
//   const { name, image } = location.state || {}; // Retrieve passed state

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//           Buy Now
//         </h1>
//         {name && image ? (
//           <>
//             <div className="mb-4 flex justify-center">
//               <img
//                 src={image}
//                 alt={name}
//                 className="w-32 h-32 object-cover rounded-lg"
//               />
//             </div>
//             <h2 className="text-lg font-semibold text-center mb-4">{name}</h2>
//           </>
//         ) : (
//           <p className="text-center text-red-500">No item selected!</p>
//         )}
//         <form className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Quantity
//             </label>
//             <input
//               type="number"
//               className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter quantity"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Address
//             </label>
//             <textarea
//               className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               rows="3"
//               placeholder="Enter your address"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
//           >
//             Place Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BuyNow;

import React from "react";
import { useLocation } from "react-router-dom";

const BuyNow = () => {
  const location = useLocation();
  const { name, image, category, price, title } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Buy Now
        </h1>
        {name && image ? (
          <>
            <div className="mb-4 flex justify-center">
              <img
                src={image}
                alt={name}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            <h2 className="text-lg font-semibold text-center mb-2">{name}</h2>
            <p className="text-center text-gray-600 mb-4">{title}</p>
            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Category:</span>
              <span className="text-gray-800">{category}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-500">Price:</span>
              <span className="text-gray-800">${price}</span>
            </div>
          </>
        ) : (
          <p className="text-center text-red-500">No item selected!</p>
        )}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Quantity
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter quantity"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
              placeholder="Enter your address"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyNow;

