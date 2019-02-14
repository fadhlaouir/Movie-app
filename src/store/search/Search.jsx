import React from 'react'
// import PropTypes from 'prop-types'
import './Search.scss'
// onInputChange,
const Search = ({ handleSearch }) => (
  <div className="search">
    <div>
      <label style={{ color: '#fff', fontFamily: 'bold', fontSize: '24', paddingRight: '10px' }}>Search</label>
      <input label="Search Movie" icon="search" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  </div>
)
// handleSearch(e.target.value)

// Search.propTypes = {
// }

export default Search
