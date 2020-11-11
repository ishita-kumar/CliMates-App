import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import First from './screens/firstfile';
import Signup from './screens/Signup';
import Login from './screens/Login';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
    {/* <First></First> */}
    <Login></Login>
         <StatusBar /> 
         {/* <Navigation colorScheme={colorScheme} /> */}
      </SafeAreaProvider>
    );
  }
}
