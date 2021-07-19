import 'react-native-gesture-handler';

import React from 'react';

import { ThemeProvider } from './src/context/theme/ThemeContext';
import { NavigationStack } from './src/navigation/NavigationStack';

const App = () => (
  <AppState>
    <NavigationStack />
  </AppState>
);

const AppState = ({ children }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
);

export default App;
