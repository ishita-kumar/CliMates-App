import { createStore } from 'redux';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'climatesApp',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default createStore(rootReducer);

export let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export let persistor = persistStore(store);
