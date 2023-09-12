import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const test = () => (
  <View>
    <Text>La page de test</Text>
    <Link href="/">Home</Link>
  </View>
);

export default test;
