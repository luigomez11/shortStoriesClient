import { createStore, compose } from 'redux';

//import root reducer
import rootReducer from './reducers/index';
import stories from './data/stories';

const store = createStore(rootReducer);

export default store;
