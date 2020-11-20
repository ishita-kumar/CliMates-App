import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import First from './screens/firstfile';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Articles from './screens/Articles';
import Questions from './screens/Questions';
import Welldone from './screens/Settings';
import Clock from "./screens/clock";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
         <StatusBar />
   <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}

    // <Welldone/>
      // <Articles></Articles>
  //  <Questions/>
         {/* <Navigation colorScheme={colorScheme} /> */}
    {/* <Login></Login> */}