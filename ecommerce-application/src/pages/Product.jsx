import React, { useContext, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
  const { productId } = useParams()
  const { products, addToCart } = useContext(ShopContext)
  const product = useMemo(()=> products.find(p => p._id === productId), [products, productId])
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '')

  if (!product) return <div className='py-6'>Product not found.</div>

  return (
    <div className='py-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div>
        <img src={product.image[0]} alt={product.name} className='w-full rounded border' />
      </div>
      <div>
        <h1 className='text-2xl prata-regular mb-2'>{product.name}</h1>
        <div className='text-gray-600 mb-3'>{product.category} • {product.subCategory}</div>
        <div className='text-xl font-semibold mb-4'>₹{product.price}</div>
        <p className='text-gray-700 mb-4'>{product.description}</p>

        {product.sizes?.length > 0 && (
          <div className='mb-4'>
            <div className='mb-1 text-sm text-gray-600'>Select size</div>
            <div className='flex gap-2 flex-wrap'>
              {product.sizes.map(s => (
                <button
                  key={s}
                  onClick={()=> setSelectedSize(s)}
                  className={`px-3 py-1 border rounded ${selectedSize === s ? 'bg-black text-white' : 'bg-white'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={()=> addToCart(product._id, selectedSize)}
          className='bg-black text-white px-4 py-2 rounded'
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product
