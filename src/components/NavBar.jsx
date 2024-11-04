import React from 'react'

const NavBar = () => {
  return (
    <div className = 'bg-red-800 w-full h-10 flex gap-6 justify-center items-center text-xl font-bold text-white '>
        <button>
            Home
        </button>
        <button>
            Projects
        </button>
        <button>
            Experience
        </button>
    </div>
  )
}

export default NavBar