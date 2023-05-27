import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./redux/reducers/index";
import rootEffect from "./redux/effects";
import { createEpicMiddleware } from "redux-observable";
import { BehaviorSubject } from "rxjs";
import { switchMap } from "rxjs/operators";

const epic$ = new BehaviorSubject(rootEffect);

const hotReloadingEpic = (...args) =>
  epic$.pipe(switchMap((epic) => epic(...args)));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(hotReloadingEpic);
  return store;
}
