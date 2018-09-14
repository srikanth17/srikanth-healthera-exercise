import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import patients from '../reducers/patients';

export default () => {
    return createStore(
        combineReducers({
            patients
        }),
        applyMiddleware(ReduxThunk)
    );
};