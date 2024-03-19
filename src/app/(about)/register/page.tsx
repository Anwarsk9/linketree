import React from "react";

const Register = () => {
  return (
    <>
      <div className="text-red-600 bg-gray-100 overflow-hidden">
        <div className="animation w-[40rem] md:w-full mt-4">
          <strong>Note: </strong>
          <span>please use Signin method to create an account.</span>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100">
        <div className="h-fit bg-white p-8 mt-14 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
