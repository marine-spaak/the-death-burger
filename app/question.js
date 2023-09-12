import { SafeAreaView, ScrollView } from 'react-native';
import Questions from '../src/components/Questions/Questions';

const question = () => (
  <SafeAreaView>
    <ScrollView>
      <Questions />
    </ScrollView>
  </SafeAreaView>
);

export default question;
