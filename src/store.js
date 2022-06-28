import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import campaignReducer from '../src/reducers/campaignReducer';



const store = createStore(campaignReducer,applyMiddleware(thunk));

export default store;