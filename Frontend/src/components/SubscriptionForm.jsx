import { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:4000/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("PDF sent successfully!");
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || "Failed to send the PDF. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white mt-1 px-4 md:px-20 py-10 flex flex-col md:flex-row items-center">
      {/* Text Content */}
      <div className="md:w-1/2 mr-10 space-y-3">
        <h1 className="text-green-700 text-2xl md:text-4xl font-bold">
          Mindful Meals for a Healthier{" "}
          <span className="text-[#7f5539]">Tomorrow!</span>
        </h1>
        <p className="text-sm md:text-xl">
          Get the latest updates, recipes, and tips directly in your inbox.
        </p>
      </div>

      {/* Email Input and Button */}
      <div className="md:w-1/2 mt-6 md:mt-0 space-y-4">
        <form onSubmit={handleSubmit}>
          <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow border-none focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="btn text-white bg-green-700 mt-4 px-6 py-2 rounded-md shadow-md hover:bg-[#7f5539]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Subscribe now"} 
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default SubscriptionForm;
