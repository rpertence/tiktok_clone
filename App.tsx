/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import AppContext from './src/context/AppContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useAppContext from './src/hooks/useAppContext';

const App = () => {
  const appContext = useAppContext();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.backgroundStyle}>
        <GestureHandlerRootView>
          <AppContext.Provider value={appContext}>
            <Home />
          </AppContext.Provider>
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
