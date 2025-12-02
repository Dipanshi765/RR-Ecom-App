import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const { getCartCount, user, logout, products = [] } = useContext(ShopContext) || { getCartCount: () => 0 }
  
  const [visible, setVisible] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      <img src={assets.logo} className="w-36" alt="Logo" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* RIGHT ICONS */}
      <div className='flex items-center gap-6'>

        {/* ✅ Search Icon */}
        <img
          src={assets.search_icon}
          onClick={() => setSearchOpen(!searchOpen)}
          className='w-5 cursor-pointer'
          alt=""
        />

        {/* ✅ Search Bar */}
        {searchOpen && (
          <div className="absolute top-16 right-10 bg-white p-4 rounded-lg shadow-md w-64 z-20">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full border px-3 py-2 rounded-md outline-none"
            />

            {/* ✅ Search Results */}
            {searchQuery.length > 0 && (
              <div className="mt-3 max-h-60 overflow-y-auto">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <Link
                      key={item._id}
                      to={`/product/${item._id}`}
                      onClick={() => setSearchOpen(false)}
                      className="block py-2 px-2 hover:bg-gray-100 rounded"
                    >
                      {item.name}
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No results found</p>
                )}
              </div>
            )}
          </div>
        )}

        <div className='group relative'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              {user ? (
                <>
                  <p className='text-xs text-gray-500'>{user.name}</p>
                  <Link to='/orders' className='cursor-pointer hover:text-black'>Orders</Link>
                  <button onClick={logout} className='text-left cursor-pointer hover:text-black'>Logout</button>
                </>
              ) : (
                <>
                  <Link to='/login' className='cursor-pointer hover:text-black'>Login</Link>
                  <Link to='/orders' className='cursor-pointer hover:text-black'>Orders</Link>
                </>
              )}
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt=""
        />

      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
