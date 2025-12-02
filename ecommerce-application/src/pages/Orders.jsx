import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const { orders } = useContext(ShopContext)

  return (
    <div className='py-6'>
      <h2 className='text-xl font-semibold mb-4'>Orders</h2>
      {orders.length === 0 && <div>No orders yet.</div>}
      <div className='flex flex-col gap-4'>
        {orders.map(order => (
          <div key={order.id} className='border rounded p-4'>
            <div className='flex items-center justify-between mb-2'>
              <div className='text-sm text-gray-600'>#{order.id}</div>
              <div className='text-sm'>{new Date(order.createdAt).toLocaleString()}</div>
            </div>
            <div className='flex flex-col gap-2'>
              {order.items.map(({ product, qty, size }) => (
                <div key={product._id + size} className='flex items-center gap-3'>
                  <img src={product.image[0]} className='w-10 h-10 object-cover rounded' />
                  <div className='flex-1'>
                    <div className='text-sm'>{product.name}</div>
                    <div className='text-xs text-gray-600'>Size: {size || '-'} • Qty: {qty}</div>
                  </div>
                  <div className='text-sm'>₹{product.price * qty}</div>
                </div>
              ))}
            </div>
            <div className='text-right mt-3'>
              <span className='text-sm text-gray-600'>Total: </span>
              <span className='font-medium'>₹{order.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
