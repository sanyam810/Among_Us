import React from 'react'

export const Search = () => {
  return (
    <div className="search">
      <div className="searchFrom">
        <input type="text" />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/9024329/pexels-photo-9024329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search;