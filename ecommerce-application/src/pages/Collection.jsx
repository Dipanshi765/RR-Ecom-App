import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const Collection = () => {
  const {
    filteredProducts,
    setSearchQuery,
    searchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    selectedSizes,
    setSelectedSizes,
    sortBy,
    setSortBy,
  } = useContext(ShopContext)

  return (
    <div className='py-6'>
      {/* header moved into products section to sit directly above cards */}

      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Sidebar filters */}
        <aside className='md:col-span-1'>
          <div className='text-gray-700 font-semibold mb-3'>Filters</div>
          <div className='border rounded p-4 mb-5'>
            <div className='font-semibold mb-3'>Categories</div>
            {['Men','Women','Kids'].map(cat => (
              <label key={cat} className='flex items-center gap-2 text-sm mb-2'>
                <input type='radio' name='cat' checked={selectedCategory===cat} onChange={()=> setSelectedCategory(cat)} />
                <span>{cat.toLowerCase()}</span>
              </label>
            ))}
            <label className='flex items-center gap-2 text-sm'>
              <input type='radio' name='cat' checked={selectedCategory==='All'} onChange={()=> setSelectedCategory('All')} />
              <span>all</span>
            </label>
          </div>
          <div className='border rounded p-4 mb-5'>
            <div className='font-semibold mb-3'>Type</div>
            {['Topwear','Bottomwear','Winterwear'].map(type => (
              <label key={type} className='flex items-center gap-2 text-sm mb-2'>
                <input type='radio' name='sub' checked={selectedSubCategory===type} onChange={()=> setSelectedSubCategory(type)} />
                <span>{type.toLowerCase()}</span>
              </label>
            ))}
            <label className='flex items-center gap-2 text-sm'>
              <input type='radio' name='sub' checked={selectedSubCategory==='All'} onChange={()=> setSelectedSubCategory('All')} />
              <span>all</span>
            </label>
          </div>
        </aside>

        {/* Products grid */}
        <section className='md:col-span-3'>
          <div className='flex items-center gap-4 mb-4'>
            <h1 className='text-2xl text-gray-700 font-medium tracking-wide'>ALL COLLECTIONS</h1>
            <div className='h-[2px] bg-gray-400 w-12'></div>
            <div className='ml-auto'>
              <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)} className='border rounded px-3 py-2'>
                <option value='relevance'>Relevent</option>
                <option value='price-asc'>Price: Low to High</option>
                <option value='price-desc'>Price: High to Low</option>
                <option value='newest'>Newest</option>
                <option value='bestseller'>Bestseller</option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {filteredProducts.map(p => (
            <Link key={p._id} to={`/product/${p._id}`} className='rounded p-2 transition ease-in-out hover:shadow hover:-translate-y-1'>
              <div className='w-full aspect-[3/4] overflow-hidden'>
                <img src={p.image[0]} alt={p.name} className='w-full h-full object-cover' />
              </div>
              <div className='mt-2 text-sm text-gray-700'>{p.name}</div>
              <div className='text-sm text-gray-800'>$ {p.price}</div>
            </Link>
          ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Collection
