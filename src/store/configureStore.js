import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import combinedReducers from '../reducers';


// Sync dispatched route actions to the history
const router = syncHistory(browserHistory);

/**
 * Creates a preconfigured store.
 */
export default function configureStore(initialState) {
  return createStore(
    combinedReducers,
    initialState,
    applyMiddleware(thunk, promise, router)
  );
}
