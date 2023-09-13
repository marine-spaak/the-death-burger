import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => (
  <Drawer
    screenOptions={{
      headerShown: false,
      swipeEdgeWidth: 0,
    }}
  >
    <Drawer.Screen
      name="home"
      options={{
        drawerLabel: 'Home',
        title: 'Home',
      }}
    />
    <Drawer.Screen
      name="settings"
      options={{
        drawerLabel: 'Settings',
        title: 'Settings',
      }}
    />
  </Drawer>
);

export default DrawerLayout;
