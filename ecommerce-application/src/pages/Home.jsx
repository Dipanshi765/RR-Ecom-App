import React, { useContext, useMemo } from 'react'
import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { products } = useContext(ShopContext)

  // ✅ Latest 10 items
  const newest = useMemo(() => [...products].sort((a, b) => b.date - a.date).slice(0, 10), [products])

  // ✅ Top 5 bestsellers
  const bestsellers = useMemo(() => products.filter(p => p.bestseller).slice(0, 5), [products])

  return (
    <div className='font-[Outfit]'>
      <Hero />

      {/* 🆕 Latest Collections Section (FIRST) */}
      <section className='my-16'>
        <h2 className='text-3xl text-center mb-2 text-gray-700 font-medium tracking-wide'>
          LATEST <span className='font-semibold'>COLLECTIONS</span>
        </h2>
        <p className='text-center text-gray-500 mb-10'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6'>
          {newest.map(p => (
            <Link
              key={p._id}
              to={`/product/${p._id}`}
              className='rounded-md overflow-hidden bg-white hover:shadow-lg transition-transform duration-300 hover:-translate-y-1'
            >
              <img
                src={p.image[0]}
                alt={p.name}
                className='w-full h-[260px] object-cover'
              />
              <div className='p-3'>
                <div className='text-sm text-gray-600'>
                  {p.category} • {p.subCategory}
                </div>
                <div className='font-medium text-gray-800 truncate'>{p.name}</div>
                <div className='text-gray-900 font-semibold mt-1'>₹{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🌟 Best Sellers Section (SECOND) */}
      <section className='my-16'>
        <h2 className='text-3xl text-center mb-2 text-gray-700 font-medium tracking-wide'>
          BEST <span className='font-semibold'>SELLERS</span>
        </h2>
        <p className='text-center text-gray-500 mb-10'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6'>
          {bestsellers.map(p => (
            <Link
              key={p._id}
              to={`/product/${p._id}`}
              className='rounded-md overflow-hidden bg-white hover:shadow-lg transition-transform duration-300 hover:-translate-y-1'
            >
              <img
                src={p.image[0]}
                alt={p.name}
                className='w-full h-[260px] object-cover'
              />
              <div className='p-3'>
                <div className='text-sm text-gray-600'>
                  {p.category} • {p.subCategory}
                </div>
                <div className='font-medium text-gray-800 truncate'>{p.name}</div>
                <div className='text-gray-900 font-semibold mt-1'>₹{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 📦 Policy Cards */}
      <section className='my-12 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='border rounded-lg p-6 text-center hover:shadow-md transition'>
          <div className='font-semibold mb-1'>Easy Exchange Policy</div>
          <div className='text-sm text-gray-600'>Hassle free 7-day exchange on all items</div>
        </div>
        <div className='border rounded-lg p-6 text-center hover:shadow-md transition'>
          <div className='font-semibold mb-1'>7 Days Return Policy</div>
          <div className='text-sm text-gray-600'>Return within 7 days of delivery</div>
        </div>
        <div className='border rounded-lg p-6 text-center hover:shadow-md transition'>
          <div className='font-semibold mb-1'>Best Customer Support</div>
          <div className='text-sm text-gray-600'>We are here to help 24/7</div>
        </div>
      </section>

      {/* ✉️ Subscribe Section */}
      <Subscribe />
    </div>
  )
}

export default Home
