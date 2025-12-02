import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const PlaceOrder = () => {
  const { cart, products, getCartAmount, placeOrder, user } = useContext(ShopContext)
  const navigate = useNavigate()

  const entries = Object.entries(cart)
    .map(([key, qty])=> {
      const [productId, size] = key.split('_')
      const product = products.find(p => p._id === productId)
      return product ? { key, product, qty, size } : null
    })
    .filter(Boolean)

  return (
    <div className='py-6'>
      <h2 className='text-xl font-semibold mb-4'>Place Order</h2>
      {entries.length === 0 && <div>Your cart is empty.</div>}
      <div className='flex flex-col gap-4'>
        {entries.map(({ key, product, qty, size }) => (
          <div key={key} className='flex items-center gap-4 border rounded p-3'>
            <img src={product.image[0]} alt={product.name} className='w-16 h-16 object-cover rounded' />
            <div className='flex-1'>
              <div className='font-medium'>{product.name}</div>
              <div className='text-sm text-gray-600'>Size: {size || '-'}</div>
              <div className='text-sm'>Qty: {qty}</div>
            </div>
            <div className='font-medium'>₹{product.price * qty}</div>
          </div>
        ))}
      </div>

      {entries.length > 0 && (
        <div className='mt-6'>
          <div className='text-lg mb-4'>Total: <span className='font-semibold'>₹{getCartAmount()}</span></div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <button
              className='flex items-center justify-center gap-2 border rounded px-4 py-3 hover:bg-gray-50 disabled:opacity-50'
              onClick={()=> { const id = placeOrder(); if (id) navigate('/orders'); }}
              disabled={!user}
            >
              <img src={assets.razorpay_logo} className='h-5' alt='' />
              <span>{user ? 'Pay with Razorpay' : 'Login to Continue'}</span>
            </button>
            <button
              className='flex items-center justify-center gap-2 border rounded px-4 py-3 hover:bg-gray-50 disabled:opacity-50'
              onClick={()=> { const id = placeOrder(); if (id) navigate('/orders'); }}
              disabled={!user}
            >
              <img src={assets.stripe_logo} className='h-5' alt='' />
              <span>{user ? 'Pay with Stripe' : 'Login to Continue'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlaceOrder
