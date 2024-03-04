import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="px-3 text-2xl sm:text-3xl font-bold text-center mb-6">
        Choose the Right Plan for You
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-4 mb-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Basic</div>
            <p className="text-gray-700 text-base">$9.99/month</p>
            <ul className="text-gray-700 text-base mt-4">
              <li>5 Projects</li>
              <li>10 GB Storage</li>
              <li>Limited Support</li>
            </ul>
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Select Plan
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-4 mb-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Standard</div>
            <p className="text-gray-700 text-base">$19.99/month</p>
            <ul className="text-gray-700 text-base mt-4">
              <li>15 Projects</li>
              <li>25 GB Storage</li>
              <li>Priority Support</li>
            </ul>
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Select Plan
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-4 mb-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Premium</div>
            <p className="text-gray-700 text-base">$29.99/month</p>
            <ul className="text-gray-700 text-base mt-4">
              <li>Unlimited Projects</li>
              <li>50 GB Storage</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
