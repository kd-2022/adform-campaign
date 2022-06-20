import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import campaignReducer from './Campaign/campaignReducer';



const store = createStore(campaignReducer,applyMiddleware(thunk));

export default store;