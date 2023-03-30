import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/9024329/pexels-photo-9024329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar;