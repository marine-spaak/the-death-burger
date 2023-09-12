import { Link, useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

const test = () => {
  const router = useRouter();
  return (
    <View>
      <Text>La page de test</Text>
      <Link href="/">Home</Link>
      <Button
        onPress={() => router.back()}
        title="Bouton BACK"
      />
    </View>
  );
};

export default test;
