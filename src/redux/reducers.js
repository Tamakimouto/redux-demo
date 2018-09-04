import { combineReducers } from 'redux';

const appState = {
    input: ""
};

const appReducer = (state = appState, action) => {
    switch (action.type) {
        case "USER_INPUT":
            return {...state, input: action.input};
        default:
            return {...state};
    }
};

const Reducers = combineReducers({
    app: appReducer
});

export default Reducers;
