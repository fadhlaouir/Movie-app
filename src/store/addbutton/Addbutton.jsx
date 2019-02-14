import React, { Component } from 'react'
import './Addbutton.scss'
import { Card } from 'react-md';
import StarRating from '../starsRating'

const style = { maxWidth: 230 };
class Addbutton extends Component {
  state = {
    showMovieInfo: false
  };

  render() {
    const { showMovieInfo } = this.state;
    return (
      <div>
        <Card style={style}>
          <img onClick={() => this.setState({
            showMovieInfo:
              !this.state.showMovieInfo
          })}
            src="https://pngimage.net/wp-content/uploads/2018/06/icon-add-png-7.png" alt="add" className="add_icon"

          />
        </Card>
        {showMovieInfo ? (
          <Card style={style}>

            <h4>Add Movie </h4>
            <ul className="list-group">
              <li className="list-group-item">
                Image Link :
              <input type="text" name="name" />
              </li>
              <li className="list-group-item">
                Movie Title :
              <input type="text" name="name" />
              </li>
              <li className="list-group-item">
                Year :
              <input type="number" name="year" />
              </li>
              <li className="list-group-item">
                rating :
              <StarRating />
              </li>
            </ul>

          </Card>

        ) : null}
      </div>
    )
  }
}
export default Addbutton;