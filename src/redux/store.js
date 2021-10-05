import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);
saga.run(rootSaga);

export default store;
