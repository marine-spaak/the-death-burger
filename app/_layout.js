import { Stack } from 'expo-router';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import App from '../App';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  return <Stack onLayout={App} />;
};

export default Layout;
