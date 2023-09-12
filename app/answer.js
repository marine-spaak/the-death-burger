import { SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { HeaderLeft, HeaderRight } from '../src/components';

import Answers from '../src/components/Answers/Answers';
import { COLORS } from '../src/constants';

const answer = () => {
  const router = useRouter();
  const backFunction = () => { router.back(); };

  return (
    <SafeAreaView>

      {/* C'est ici que je définis les propriétés du screen */}
      <Stack.Screen
        options={{
          headerTitle: '', // Ceci par ex supprime le titre dans le header
          headerShadowVisible: false, // Ceci supprime l'ombre sous le header
          headerStyle: { backgroundColor: COLORS.lightGray },
          headerLeft: () => (<HeaderLeft backFunction={backFunction} />
          ),
          headerRight: () => (<HeaderRight />),
        }}
      />

      <ScrollView>
        <Answers />
      </ScrollView>
    </SafeAreaView>
  );
};

export default answer;
