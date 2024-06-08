import { createStore, combineReducers } from 'redux';

// Define your reducers here
const rootReducer = combineReducers({
  // Your reducers go here
});

const store = createStore(rootReducer);

export default store;