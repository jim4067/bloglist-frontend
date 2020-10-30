import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import notificationReducer from './reducers/notificationReducer';

const reducer = combineReducers({
    notification: notificationReducer,
});

const store = createStore(
    reducer, composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;


//the store for the blog listing apps state. Should it have been in the src directory;