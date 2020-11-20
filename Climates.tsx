import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import First from './screens/firstfile';
import { connect } from 'react-redux';
import { logIn, logOut } from './redux/actionsFile';
import { getUserData } from './redux/selectors';
import { View } from './components/Themed';
function Climates(props) {
  const [isUserLoggedin, setLoggedin] = useState(false);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  React.useEffect(() => {
    // Check if user has logged in
    if (!!props.userData) {
      !props.userData.loggedIn ? setLoggedin(false) : setLoggedin(false);
    }
  }, [props.userData]);

  if (!isLoadingComplete) {
    return null;
  } else {
    if (isUserLoggedin) {
      return <Navigation colorScheme={'light'} />;
    } else {
      return <First setLoggedin={setLoggedin} />;
    }
  }
}
const mapStateToProps = (state) => ({
  userData: getUserData(state),
});
const mapDispatchToProps = { logIn, logOut };
export default connect(mapStateToProps, mapDispatchToProps)(Climates);
