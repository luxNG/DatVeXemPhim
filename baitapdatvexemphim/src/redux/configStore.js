import { combineReducers, createStore } from 'redux';

import { baiTapDatGheXemPhim } from './Reducers/baiTapDatGheXemPhim';

const rootReducer = combineReducers({

    baiTapDatGheXemPhim,


})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());