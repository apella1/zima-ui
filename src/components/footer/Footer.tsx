import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center mt-4 space-y-4 ">
      <div className="flex flex-col space-y-2 w-full md:w-1/2">
        <h2 className="text-lg font-bold">Contact Us</h2>
        <form className="flex flex-col space-y-2">
        <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold mb-1">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-gray-300 rounded-md px-2 py-1"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-2 w-1/4">
              Send Message
            </button>
        </form>
      </div>
      <div className="text-sm">
        <a href="/terms" className="hover:underline">
          Terms and Conditions
        </a>
      </div>
      <p className="text-sm">&copy; Zima 2023</p>
    </footer>
  );
}