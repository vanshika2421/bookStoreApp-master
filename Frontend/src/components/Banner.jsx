// // import React from "react";
// // import pharma from "../../public/pharma.png";
// // function Banner() {
// //   return (
// //     <>
// //       <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
// //         <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
// //           <div className="space-y-8">
// //             <h1 className="text-2xl md:text-4xl font-bold">
// //               Hello, welcomes here to learn something{" "}
// //               <span className="text-blue-500">new everyday!!!</span>
// //             </h1>
// //             <p className="text-sm md:text-xl">
// //               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
// //               et totam. Tempora amet atque expedita, quae corrupti totam sed
// //               pariatur corporis at veniam est voluptas animi!
// //             </p>
// //             <label className="input input-bordered flex items-center gap-2">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 viewBox="0 0 16 16"
// //                 fill="currentColor"
// //                 className="w-4 h-4 opacity-70"
// //               >
// //               <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
// //                 <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
// //               </svg>
// //               <input type="text" className="grow" placeholder="Email" />
// //             </label>
// //           </div>
// //           <button className="btn mt-6 text-white bg-blue-500">Get Started</button>
// //         </div>
// //         <div className=" order-1 w-full mt-20 md:w-1/2">
// //           <img
// //             src={pharma}
// //             className="md:w-[550px] md:h-[460px] md:ml-12"
// //             alt=""
// //           />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Banner;


// import React, { useState } from "react";
// import pharma from "../../public/pharma.png";
// import pancakes from "../../public/pancakes.png";
// import eggs from "../../public/eggs.png";


// const Banner = () => {
//   const images = [pharma, pancakes, eggs, pharma]; // Add more image paths if needed
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto flex flex-col items-center my-10">
//       {/* Carousel Section */}
//       <div className="relative w-full md:w-4/3 bg-gray-100 rounded-md overflow-hidden shadow-md">
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className="w-full h-80 object-cover"
//         />

//         {/* Navigation Arrows */}
//         <button
//           onClick={handlePrev}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
//         >
//           &#8249; {/* Left Arrow */}
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
//         >
//           &#8250; {/* Right Arrow */}
//         </button>
//       </div>

//       {/* Email Subscription Section */}
//       <div className="bg-white mt-6 px-4 md:px-20 py-10 flex flex-col md:flex-row items-center">
//         {/* Text Content */}
//         <div className="md:w-1/2 space-y-8">
//           <h1 className="text-2xl md:text-4xl font-bold">
//             Hello, welcome here to learn something{" "}
//             <span className="text-blue-500">new every day!!!</span>
//           </h1>
//           <p className="text-sm md:text-xl">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
//             et totam. Tempora amet atque expedita, quae corrupti totam sed
//             pariatur corporis at veniam est voluptas animi!
//           </p>
//         </div>

//         {/* Email Input and Button */}
//         <div className="md:w-1/2 mt-6 md:mt-0 space-y-4">
//           <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 shadow-sm">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="w-4 h-4 opacity-70"
//             >
//               <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//               <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//             </svg>
//             <input
//               type="email"
//               className="grow border-none focus:outline-none"
//               placeholder="Enter your email"
//             />
//           </label>
//           <button className="btn text-white bg-blue-500 px-6 py-2 rounded-md shadow-md">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
// import React, { useState, useEffect, useRef } from "react";
// import pharma from "../../public/pharma.png";
// import pancakes from "../../public/pancakes.png";
// import eggs from "../../public/eggs.png";
// import salads from "../../public/salads.png";
// import breads from "../../public/breads.png";


// const Banner = () => {
//   const images = [pharma, pancakes, eggs, salads, breads,]; // Image array
//   const scrollRef = useRef(null);

//   // Auto-scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleScroll();
//     }, 2000); // Scroll every 2 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   const handleScroll = () => {
//     if (scrollRef.current) {
//       const scrollContainer = scrollRef.current;
//       const scrollWidth = scrollContainer.scrollWidth;
//       const visibleWidth = scrollContainer.offsetWidth;

//       // Scroll to the next position
//       scrollContainer.scrollLeft += visibleWidth;

//       // Reset to the beginning if it reaches the end
//       if (scrollContainer.scrollLeft + visibleWidth >= scrollWidth) {
//         scrollContainer.scrollLeft = 0;
//       }
//     }
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto mt-20 flex flex-col items-center">
//       {/* Carousel Section */}
//       <div
//         ref={scrollRef}
//         className="relative w-full md:w-3/4 h-64 bg-gray-100 rounded-md overflow-x-scroll whitespace-nowrap scroll-smooth shadow-md"
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="inline-block w-full h-full object-cover"
//           />
//         ))}
//       </div>

//       {/* Email Subscription Section */}
//       <div className="bg-white mt-6 px-4 md:px-20 py-10 flex flex-col md:flex-row items-center">
//         {/* Text Content */}
//         <div className="md:w-1/2 space-y-8">
//           <h1 className="text-2xl md:text-4xl font-bold">
//             Hello, welcome here to learn something{" "}
//             <span className="text-blue-500">new every day!!!</span>
//           </h1>
//           <p className="text-sm md:text-xl">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
//             et totam. Tempora amet atque expedita, quae corrupti totam sed
//             pariatur corporis at veniam est voluptas animi!
//           </p>
//         </div>

//         {/* Email Input and Button */}
//         <div className="md:w-1/2 mt-6 md:mt-0 space-y-4">
//           <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 shadow-sm">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="w-4 h-4 opacity-70"
//             >
//               <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//               <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//             </svg>
//             <input
//               type="email"
//               className="grow border-none focus:outline-none"
//               placeholder="Enter your email"
//             />
//           </label>
//           <button className="btn text-white bg-blue-500 px-6 py-2 rounded-md shadow-md">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useState, useEffect, useRef } from "react";
import pharma from "../../public/pharma.png";
import pancakes from "../../public/pancakes.png";
import eggs from "../../public/eggs.png";
import salads from "../../public/salads.png";
import breads from "../../public/breads.png";
import noodles from "../../public/noodles.png";
import sabziyaan from "../../public/sabziyaan.png";
import salad from "../../public/salad.png";
import relatable from "../../public/relatable.png";
import RecipeLinkPage from "./RecipeLinkPage";
import SubscriptionForm from "./SubscriptionForm";


const Banner = () => {
  const images = [
    { src: pharma, caption: "Learn about Pharma Advancements" },
    { src: pancakes, caption: "Discover Delicious Pancakes" },
    { src: eggs, caption: "Master the Art of Egg Recipes" },
    { src: salads, caption: "Create Fresh & Healthy Salads" },
    { src: breads, caption: "Bake Perfect Breads Every Time" },
    // { src: noodles, caption: "Bake Perfect Breads Every Time" },
    // { src: sabziyaan, caption: "Bake Perfect Breads Every Time" },
    // { src: relatable, caption: "Bake Perfect Breads Every Time" },
    // { src: salad, caption: "Bake Perfect Breads Every Time" },
  ]; // Image array with captions
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll();
    }, 2000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const visibleWidth = scrollContainer.offsetWidth;

      // Scroll to the next position
      scrollContainer.scrollLeft += visibleWidth;

      // Reset to the beginning if it reaches the end
      if (scrollContainer.scrollLeft + visibleWidth >= scrollWidth) {
        scrollContainer.scrollLeft = 0;
      }
    }
  };

  return (
    <div className=" max-w-screen-2xl container mx-auto mt-20 flex flex-col items-center">
      {/* Carousel Section */}
      <div
        ref={scrollRef}
        className="relative w-full h-[350px] bg-gray-100 rounded-md overflow-x-scroll whitespace-nowrap scroll-smooth shadow-md"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative inline-block w-full h-full"
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
                {image.caption}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Email Subscription Section */}
     <SubscriptionForm/>
      <RecipeLinkPage/>
    </div>
  );
};

export default Banner;
