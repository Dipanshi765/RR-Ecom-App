import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-16'>
      {/* Footer columns */}
      <footer className='py-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start'>
        <div>
          <img src={assets.logo} alt='Forever' className='w-40 mb-4'/>
          <p className='text-gray-700 leading-7'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
        </div>
        <div>
          <h4 className='font-semibold tracking-wide mb-4'>COMPANY</h4>
          <ul className='space-y-3 text-gray-700'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/collection'>Delivery</Link></li>
            <li><Link to='/contact'>Privacy policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold tracking-wide mb-4'>GET IN TOUCH</h4>
          <ul className='space-y-3 text-gray-700'>
            <li>+91-000-000-0000</li>
            <li>shop.store@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </footer>

      <hr className='border-gray-200'/>
      <div className='py-6 text-center text-sm text-gray-600'>
        Copyright 2025© Dipanshi Diwakar - All Right Reserved.
      </div>
    </div>
  )
}

export default Footer


