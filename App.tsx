import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import First from './screens/firstfile';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Climates from './Climates';
export default function App() {
  const [isUserLoggedin, setLoggedin] = useState(false);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Climates />
        </PersistGate>
      </Provider>
    );
  }
}
// <Articles></Articles>
//  <Questions/>
{
  /* <Navigation colorScheme={colorScheme} /> */
}
{
  /* <Login></Login> */
}
