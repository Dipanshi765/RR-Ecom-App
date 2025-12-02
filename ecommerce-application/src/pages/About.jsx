import React from 'react'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

const About = () => {
  return (
    <div className='py-12 px-4 md:px-16 font-[Outfit]'>
      {/* Heading */}
      <div className='text-center mb-10'>
        <h2 className='text-3xl font-medium text-gray-700 tracking-wide flex items-center justify-center gap-3'>
          ABOUT <span className='font-semibold'>US</span>
          <span className='block w-12 h-[2px] bg-gray-400'></span>
        </h2>
      </div>

      {/* Content */}
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
        {/* Left: Image */}
        <div className='flex justify-end md:pr-6'>
          <img
            src={assets.about_img}
            alt='About Us'
            className='w-[95%] max-w-xl border border-gray-200 shadow-sm md:h-[400px] object-cover'
          />
        </div>

        {/* Right: Text */}
        <div className='text-gray-700 text-[15px] leading-relaxed'>
          <p className='mb-4'>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea — to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>

          <p className='mb-4'>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>

          <h3 className='text-black font-semibold mb-2'>Our Mission</h3>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations — from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className='mt-16 mb-4'>
        <Subscribe />
      </div>
    </div>
  )
}

export default About
