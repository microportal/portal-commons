import {createStore} from 'redux';

const initialState = {
    services: [],
    alerts: [],
    menuOpen: true
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'MENU_OPEN':
            console.log('MENU_OPEN');
            return {...state, menuOpen: true};
        case 'MENU_CLOSE':
            console.log('MENU_CLOSE');
            return {...state, menuOpen: false};
        case 'ADD_ALERT':
            console.log('ADD_ALERT=' + action.payload);
            return {...state, alerts: [...state.alerts, action.payload]};
        case 'LOAD_SERVICES':
            console.log('LOAD_SERVICES');
            return {...state, services: action.payload};
        default:
            return state;
    }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const storeInstance = createStore(reducer,devTools);
