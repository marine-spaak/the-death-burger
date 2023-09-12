import { useRouter } from 'expo-router';
import {
  SafeAreaView, ScrollView, Text, Button,
} from 'react-native';

const Test = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Coucou la page de test</Text>
        <Button
          onPress={() => router.back()}
          title="page précédente"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Test;
