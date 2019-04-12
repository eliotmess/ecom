import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import reducers from './reducers';
import DevTools from './DevTools';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const enhancers = [
    applyMiddleware(thunk),
    DevTools.instrument()
]

const store = createStore(
    reducers,
    persistedState,
    compose(...enhancers),
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}), 1000);



export default store;