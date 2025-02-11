/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
      return <>
            {/* TOP HEADER HERE */}
            <div className="bg-gray-800 text-white p-1 justify-evenly flex gap-2 items-center">
                  <div className="text-xs sm:text-sm">Summer Sale for All Clothing items and Free Express Delivery - OFF 60%! <a href="/shop" className='text-blue-400 hover:text-blue-600 underline px-4'>
                        Shop Now
                  </a> </div>
                  <div>
                        <select name="English" id="lang" className='text-xs text-white bg-gray-800 border-none'>
                              <option value="English">English</option>
                              <option value="Bangla">Bangla</option>
                              <option value="Spanish">Spanish</option>
                              <option value="French">French</option>
                        </select>
                  </div>
            </div>
            {/* MAIN HEADER HERE */}
            <div className="bg-white shadow-md py-4 px-4">
                  <div className="container mx-auto flex justify-between items-center">
                        <div className="text-2xl font-bold text-gray-800">
                              <a href="/" className="text-4xl">Aiojone</a>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-8 justify-center">
                              <div className="relative">
                                    <a href="/cart" className="text-gray-800 hover:text-gray-600">
                                          <FaShoppingCart size={35} />
                                          <span className="hidden">Cart</span>
                                    </a>
                                    <div className="h-5 w-5 bg-red-500 rounded-2xl text-white text-xs flex items-center justify-center absolute -top-2 -right-3">2

                                    </div>
                              </div>
                              <a href="/account" className="text-gray-800 hover:text-gray-600">
                                    <FaRegUserCircle size={35} />
                              </a>

                        </div>
                  </div>
            </div>
            <div className="bg-gray-100 py-4">
                  <div className="container mx-auto flex justify-center">

                        <form className="w-full px-3 sm:px-0 max-w-3xl">
                              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                              <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                          </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                              </div>
                        </form>

                  </div>
            </div>

      </>;
};
export default Header;
