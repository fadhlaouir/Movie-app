import React from 'react'
//import PropTypes from 'prop-types'
import './StarsRating.scss'


const StarsRating = (

) => (
    <div className="starsRating">
      <input type="radio" name="star" id="star1" /><label for="star1"></label>
      <input type="radio" name="star" id="star2" /><label for="star2"></label>
      <input type="radio" name="star" id="star3" /><label for="star3"></label>
      <input type="radio" name="star" id="star4" /><label for="star4"></label>
      <input type="radio" name="star" id="star5" /><label for="star5"></label>
    </div>
  )

// StarsRating.propTypes = {
// }

export default StarsRating
