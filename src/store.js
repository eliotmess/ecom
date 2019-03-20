import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import DevTools from './DevTools';

const enhancers = [
    applyMiddleware(thunk),
    DevTools.instrument()
]

const store = createStore(
    reducers,
    compose(...enhancers),
);

export default store;