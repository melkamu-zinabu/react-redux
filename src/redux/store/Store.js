import { createStore } from 'redux';
import cakereducer from "../cake/CakeReducer"

const store=createStore(cakereducer);
export default store


//after settuping action reduce and store then go to app.js and use react-redux