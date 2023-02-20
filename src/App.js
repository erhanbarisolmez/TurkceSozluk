// In App.js in a new project
import * as React from 'react';

// Navigation
import {ThemeProvider} from 'styled-components';
import Navigation from './Navigation'

//Theme
import theme from './utils/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
    </ThemeProvider>
    
  );
}

