// import React, { useContext, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const { login, user } = useContext(ShopContext)
//   const navigate = useNavigate()
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')

//   if (user) {
//     navigate('/')
//   }

//   return (
//     <div className='py-6 max-w-md mx-auto'>
//       <h2 className='text-xl font-semibold mb-4'>Login</h2>
//       <div className='flex flex-col gap-3'>
//         <input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name' className='border rounded px-3 py-2' />
//         <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' className='border rounded px-3 py-2' />
//         <button
//           className='bg-black text-white px-4 py-2 rounded'
//           onClick={()=> { login({ name, email }); navigate('/'); }}
//           disabled={!name || !email}
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Login



import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login, user } = useContext(ShopContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (user) {
    navigate('/')
  }

  return (
    <div className='py-6 max-w-md mx-auto'>
      <h2 className='text-xl font-semibold mb-4'>Login</h2>
      <div className='flex flex-col gap-3'>
        
        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder='Email'
          className='border rounded px-3 py-2'
        />

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          placeholder='Password'
          className='border rounded px-3 py-2'
        />

        <button
          className='bg-black text-white px-4 py-2 rounded'
          onClick={()=> { login({ email, password }); navigate('/'); }}
          disabled={!email || !password}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default Login
