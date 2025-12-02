import React from 'react'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

const Contact = () => {
  return (
    <div className='py-8 px-4 md:px-16 font-[Outfit]'>
      {/* Heading */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-medium text-gray-700 tracking-wide flex items-center justify-center gap-3'>
        
          Contact <span className='font-semibold'>Us</span>
          <span className='block w-12 h-[2px] bg-gray-400'></span>
        </h2>
      </div>

      {/* Contact Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
        <img
          src={assets.contact_img}
          alt='Contact'
          className='w-full rounded-md shadow-sm object-cover'
        />

        <div className='flex flex-col gap-3'>
          <div>
            <div className='text-sm text-gray-600'>Email</div>
            <div className='font-medium'>shop.store.com</div>
          </div>
          <div>
            <div className='text-sm text-gray-600'>Phone</div>
            <div className='font-medium'>+91 (875) 123-4567</div>
          </div>
          <div>
            <div className='text-sm text-gray-600'>Address</div>
            <div className='font-medium'>21 Baker Street</div>
          </div>

          {/* Contact Form */}
          <form className='mt-4 grid grid-cols-1 gap-3'>
            <input
              className='border rounded px-3 py-2 outline-none'
              placeholder='Your name'
            />
            <input
              className='border rounded px-3 py-2 outline-none'
              placeholder='Your email'
            />
            <textarea
              rows='4'
              className='border rounded px-3 py-2 outline-none'
              placeholder='Message'
            ></textarea>
            <button
              type='button'
              className='bg-black text-white px-4 py-2 rounded w-max'
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className='mt-16 mb-4'>
        <Subscribe />
      </div>
    </div>
  )
}

export default Contact
