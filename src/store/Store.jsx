import React from 'react'
import PropTypes from 'prop-types'
import './Store.scss'
import Search from './search'
import MovieCard from './movieCard'
import StarsRating from './starsRating'
import AddButton from './addbutton'
import { Grid, Cell } from 'react-md';

const style = { maxWidth: 230, paddingRight: 20 };



const Store = ({
  movies,
  onAddMovie,
  handleSearch
}) => {
  return (

    <div className="store">
      <div className="container">
        <Grid>
          <Cell size={12}>
            <div className="bar">
              <Search handleSearch={handleSearch} />

              <StarsRating />

            </div>
          </Cell>
        </Grid>


        <div className="card">
          {movies.map(
            (el, index) => (

              <div style={style} key={index} >
                <Cell desktopSize={6} tabletSize={4} phoneSize={4} >
                  <MovieCard

                    id={el.id}
                    image={el.image}
                    imageName={el.imageName}
                    year={el.year}
                    title={el.title}
                    rating={el.rating}
                  />

                </Cell>
              </div>
            )
          )}
        </div>


        <div className="button" style={{ paddingLeft: '120px' }}>
          <AddButton onAddMovie={onAddMovie} />

        </div>
      </div>
    </div>
  )
}

Store.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,

}


export default Store
