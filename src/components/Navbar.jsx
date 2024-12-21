import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-[60px] bg-white my-4 rounded-lg text-xl font-semibold">
        <img src="/firebaselogo.png" className=' w-20 h-14 object-contain'/>
        <h1>Firebase Contact App</h1>
    </div>
  )
}

export default Navbar
