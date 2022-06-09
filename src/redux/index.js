import {applyMiddleware, createStore, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import {rootSaga} from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const configureStore = (preloadedState) => createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;