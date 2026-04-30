import React from "react";

const BotoomBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-24 text-center px-6">

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Ready To Transform Your Workflow?
      </h1>

      
      <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
        Join thousands of professionals who are already using Digitools to work smarter.
        <br />
        Start your free trial today.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap">

        <button className="bg-white text-purple-700 font-medium px-6 py-3 rounded-full hover:scale-105 transition">
          Explore Products
        </button>

        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-purple-700 transition">
          View Pricing
        </button>

      </div>

      {/* Footer text */}
      <p className="text-white/70 text-sm mt-6">
        14-day free trial • No credit card required • Cancel anytime
      </p>

    </div>
  );
};

export default BotoomBanner;