import React from 'react';
import {
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  SafeAreaView,
} from 'native-base';
import Navigations from './Screens/Navigations';
import { NavigationContainer } from '@react-navigation/native';
const theme = extendTheme({
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#99CCFE',
      200: '#63B8FF',
      300: '#313B4C',
      400: '#141820',
      500: '#000000',
    },

    amber: {
      400: '#d97706',
    },
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
      mono: 'Roboto',
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Navigations />
    </NativeBaseProvider>
  );
}
