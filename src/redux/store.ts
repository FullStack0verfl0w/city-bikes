import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import reducer, { initialState } from "./reducer";

const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)(),
));

export default store;