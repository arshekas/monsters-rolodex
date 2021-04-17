import React from 'react'
import './Search.css'

function Search({ placeholder, handleChange }) {
    return (
        <div>
            <input
            className="search"
            placeholder={placeholder}
            onChange={handleChange}
            type="search"
            />
        </div>
    )
}

export default Search
