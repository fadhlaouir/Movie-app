import React, { Component } from 'react';
import './App.css';
import Store from './store'
class App extends Component {

  state = {
    search: "",
    movies: [
      {
        id: '1',
        image: 'https://yts.am/assets/images/movies/overlord_2018/medium-cover.jpg',
        imageName: 'Overlord',
        year: 2018,
        title: 'Overlord',

      },
      {
        id: '1',
        image: 'https://yts.am/assets/images/movies/whiteboyz_1999/medium-cover.jpg',
        imageName: 'Whiteboyz',
        year: 1999,
        title: 'Overlord',

      },
      {
        id: '3',
        image: 'https://yts.am/assets/images/movies/wild_things_2_2004/medium-cover.jpg',
        imageName: 'Wild things 2',
        year: 2004,
        title: 'Wild things 2',

      },
      {
        id: '4',
        image: 'https://yts.am/assets/images/movies/factory_complex_2015/medium-cover.jpg',
        imageName: 'Whiteboyz',
        year: 2015,
        title: 'Factory Complex',

      },

    ]
  }
  onChange = (e) => {
    this.setState({ search: e.target.value })
    const { search } = this.state;
    if (search !== "" && Store.title.indexOf(search) === -1) {
      return null
    }

  }



  render() {
    return (
      <div className="App">
        <Store onInputChange={this.onChange} movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
