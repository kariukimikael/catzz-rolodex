import React from 'react'
import './SearchBox.styles.css';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input 
        className='search'
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange} 
      />
    </div>
  )
}

export default SearchBox
