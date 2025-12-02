import React from 'react'

const Subscribe = () => {
  return (
    <section className='text-center my-12'>
      <h3 className='font-outfit text-2xl font-semibold mb-2'>
          Subscribe now & get 20% off
        </h3>
      <p className='text-gray-500 mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className='max-w-2xl mx-auto flex'>
        <input className='flex-1 border border-gray-300 rounded-l px-4 py-3 outline-none' placeholder='Enter your email' />
        <button className='bg-black text-white px-6 rounded-r'>SUBSCRIBE</button>
      </div>
    </section>
  )
}

export default Subscribe


