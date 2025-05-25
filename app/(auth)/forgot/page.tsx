"use client";

import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-8 py-16">
        <div className="w-full max-w-md">
          <button className="text-sm text-gray-500 mb-8">← Back</button>

          <div className="mb-10">
            <img src="/logo.svg" alt="Finzefy Logo" className="h-10 mb-2" />
            <h2 className="text-2xl font-semibold text-gray-700">
              Create an account
            </h2>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Enter your name"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Enter email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              placeholder="Enter your Phone number"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="block w-full px-4 py-2 pr-16 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-4 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters.
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Sign up
            </button>
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a href="#" className="text-green-600 hover:underline">
                Log in
              </a>
            </p>
            <p className="text-xs text-center text-gray-400 mt-4">
              By Proceeding, you agree to Sen-orient{" "}
              <a href="#" className="underline">
                Terms of services
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                policy privacy
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex w-1/2 bg-gray-50 items-center justify-center relative p-8">
        <img
          src="/signup-image.png"
          alt="Man holding invoice"
          className="object-cover h-[90%] rounded-md"
        />
        <div className="absolute top-16 left-16 bg-white shadow-lg px-3 py-1 rounded-md text-xs">
          Invoice
        </div>
        <div className="absolute top-10 right-16 bg-purple-500 text-white shadow-lg px-3 py-1 rounded-md text-xs">
          Expenses
        </div>
        <div className="absolute top-24 right-6 bg-green-500 text-white shadow-lg px-3 py-1 rounded-md text-xs">
          Receipt
        </div>
        <div className="absolute bottom-16 left-20 bg-yellow-400 shadow px-3 py-1 rounded-md text-xs">
          Invoice
        </div>
        <div className="absolute bottom-5 right-8 bg-white text-green-700 shadow px-3 py-1 rounded-md text-xs">
          Expenses
        </div>
      </div>
    </div>
  );
}
