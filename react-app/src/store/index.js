import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './category';
import session from './session'
import taskerReducer from './tasker';
import userReducer from './user';
import orderReducer from './order'
import reviewReducer from './review';

const rootReducer = combineReducers({
  session,
  categories: categoryReducer,
  users: userReducer,
  taskers: taskerReducer,
  orders: orderReducer,
  reviews: reviewReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
