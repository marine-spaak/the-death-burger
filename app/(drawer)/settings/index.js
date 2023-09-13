import { Text, StyleSheet, View } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

const Page = () => (
  <View style={styles.container}>
    <Drawer.Screen
      options={{
        title: 'Settings',
        headerShown: true,
        headerLeft: () => <DrawerToggleButton />,
      }}
    />
    <Text style={{ fontSize: 24 }}>
      Index page of Settings Drawer
    </Text>
  </View>
);

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});