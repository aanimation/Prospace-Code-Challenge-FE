import { combineReducers } from 'redux'
import companiesReducer from './companiesReducer';
import officesReducer from './officesReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    companies: companiesReducer,
    offices: officesReducer,
    ui: uiReducer
})

export default rootReducer;