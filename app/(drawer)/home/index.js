// Le fichier app > index.js est le second point d'entrée
// On pose une SafeAreaView et dedans on va mettre notre composant App.js
import { SafeAreaView, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

import App from '../../../App';
import { HeaderLeft, HeaderRight } from '../../../src/components';
import { COLORS } from '../../../src/constants';

const index = () => {
  const backFunction = () => {};

  return (
    <SafeAreaView>

      {/* C'est ici que je définis les propriétés du screen */}
      <Stack.Screen
        options={{
          headerTitle: '', // Ceci par ex supprime le titre dans le header
          headerShadowVisible: false, // Ceci supprime l'ombre sous le header
          headerStyle: { backgroundColor: COLORS.lightGray },
          headerLeft: () => <HeaderLeft backFunction={backFunction} />,
          headerRight: () => (<HeaderRight />),
        }}
      />

      <ScrollView>
        <App />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
