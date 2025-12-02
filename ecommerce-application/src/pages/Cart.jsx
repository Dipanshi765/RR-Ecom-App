import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  const { cart, products, updateQuantity, removeFromCart, getCartAmount } = useContext(ShopContext)

  const entries = Object.entries(cart)
    .map(([key, qty])=> {
      const [productId, size] = key.split('_')
      const product = products.find(p => p._id === productId)
      return product ? { key, product, qty, size } : null
    })
    .filter(Boolean)

  return (
    <div className='py-6'>
      <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
      {entries.length === 0 && <div>Your cart is empty.</div>}
      <div className='flex flex-col gap-4'>
        {entries.map(({ key, product, qty, size }) => (
          <div key={key} className='flex items-center gap-4 border rounded p-3'>
            <img src={product.image[0]} alt={product.name} className='w-16 h-16 object-cover rounded' />
            <div className='flex-1'>
              <div className='font-medium'>{product.name}</div>
              <div className='text-sm text-gray-600'>Size: {size || '-'}</div>
              <div className='text-sm'>₹{product.price}</div>
            </div>
            <div className='flex items-center gap-2'>
              <button className='px-2 py-1 border rounded' onClick={()=> updateQuantity(product._id, size, qty - 1)}>-</button>
              <input className='w-12 text-center border rounded py-1' value={qty} onChange={(e)=> {
                const v = parseInt(e.target.value || '0', 10)
                updateQuantity(product._id, size, Number.isNaN(v) ? 0 : v)
              }} />
              <button className='px-2 py-1 border rounded' onClick={()=> updateQuantity(product._id, size, qty + 1)}>+</button>
            </div>
            <button className='px-3 py-1 border rounded' onClick={()=> removeFromCart(product._id, size)}>Remove</button>
          </div>
        ))}
      </div>

      {entries.length > 0 && (
        <div className='mt-6 text-right'>
          <div className='text-lg'>Subtotal: <span className='font-semibold'>₹{getCartAmount()}</span></div>
        </div>
      )}
    </div>
  )
}

export default Cart
