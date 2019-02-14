import Store from './Store'
import React from 'react';
const movies = [
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
        title: 'White Boyz',

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
const ConnectedStore = ({ onInputChange }) => (
    <Store
        movies={movies}
        onInputChange={onInputChange}
    />
)
export default ConnectedStore
