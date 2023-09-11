// Le fichier app > index.js est le second point d'entrée
// On pose une SafeAreaView et dedans on va mettre notre composant App.js

import { SafeAreaView, ScrollView } from 'react-native';
import App from '../App';

const Index = () => (
  <SafeAreaView>
    <ScrollView>
      <App />
    </ScrollView>
  </SafeAreaView>
);

export default Index;
