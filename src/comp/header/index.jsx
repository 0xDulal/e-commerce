/* eslint-disable no-unused-vars */
import react from 'react';
const Header = () => {
  return <>
      {/* TOP HEADER HERE */}
      <div className="bg-gray-800 text-white p-1 justify-evenly flex ">
      <div className="text-sm">Summer Sale for All Clothing items and Free Express Delivery - OFF 60%! <a href="/shop" className='text-blue-400 hover:text-blue-600 underline px-4'>
        Shop Now
        </a> </div>
        <div>
            <select name="English" id="lang" className='text-sm'>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="Bangla">Bangla</option>
            </select>
        </div>
      </div>
      {/* MAIN HEADER HERE */}
      <div className='height-16 bg-gray-900 text-white flex justify-between items-center bg-black w-{90%}'>
            <div className='flex items-center'>
                  <div className='text-2xl font-bold px-4'>LOGO</div>
                  <div className='text-sm px-4'>
                        <img src="" alt="" />
                  </div>
                  <div className='text-sm px-4'>Shop</div>
                  <div className='text-sm px-4'>About</div>
                  <div className='text-sm px-4'>Contact</div>
            </div>
            <div className='flex items-center'>
                  <div className='text-sm px-4'>Login</div>
                  <div className='text-sm px-4'>Cart</div>
            </div>
      </div>

  </>;
};
export default Header; 
