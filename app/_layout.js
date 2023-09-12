import { Stack } from 'expo-router';
import App from '../App';

const Layout = () => (
  <Stack onLayout={App} />
);

export default Layout;
