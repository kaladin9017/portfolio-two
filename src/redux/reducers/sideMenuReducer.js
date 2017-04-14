import { SELECT_PROJECT } from '../actions/types';

const initialState = {
  selected: { name: 'Fantasy Book Alley', description: 'A curated list of fantasy book recommendations and reviews gathered from the online community of book lovers.', gif: 'http://i.imgur.com/EcO2FS5.gif', spec:'React, Html, Css3, CSS Module, Webpack, babel, MongoDB, mongoose, x-ray(webscraper)', link: 'http://fantasy-book-alley.herokuapp.com/', image:'http://i.imgur.com/UeEBhAa.png', github: 'https://github.com/kaladin9017/fantasy-book-app' }
}
export default function (state = initialState, action) {
  switch (action.type) {
  case SELECT_PROJECT:
    return Object.assign({}, state, {selected: action.payload});
    default:
    return state;
  }
}
