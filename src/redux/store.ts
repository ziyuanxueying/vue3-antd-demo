import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import sessionStorage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import loginReducer from './reducer/login';

export const rootReducer = combineReducers({
  login: loginReducer,
});

/**
 * 存储配置
 */
const persistConfig = {
  key: 'login',
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
