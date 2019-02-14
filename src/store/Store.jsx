import React from 'react'
import PropTypes from 'prop-types'
import './Store.scss'
// import Search from './search'
import MovieCard from './movieCard'
import StarsRating from './starsRating'
import AddButton from './addbutton'
import { Card, Grid, Cell } from 'react-md';

const style = { maxWidth: 230, paddingRight: 20 };



const Store = ({
  onInputChange,
  movies
}) => {
  return (

    <div className="store">
      <div className="container">
        <Grid>
          <Cell size={12}>
            <div className="bar">
              {/* <Search /> */}
              <div>
                <label style={{ color: '#fff', fontFamily: 'bold', fontSize: '24', paddingRight: '10px' }}>Search</label>
                <input label="Search Movie" icon="search" onChange={(e) => onInputChange(e)} className="search-bar" />
              </div>
              <StarsRating />

            </div>
          </Cell>
        </Grid>


        <div className="card">
          {movies.map(
            (el, index) => (

              <Card style={style} >
                <Cell key={index} desktopSize={6} tabletSize={4} phoneSize={4} className="movie-card" >
                  <MovieCard
                    id={el.id}
                    image={el.image}
                    imageName={el.imageName}
                    year={el.year}
                    title={el.title}
                    rating={el.rating}
                  />

                </Cell>
              </Card>
            )
          )}
        </div>


        <div className="button" style={{ paddingLeft: '120px' }}>
          <AddButton />

        </div>
      </div>
    </div>
  )
}

Store.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,

}


export default Store
