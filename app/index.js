// Le fichier app > index.js est le second point d'entrée
// On pose une SafeAreaView et dedans on va mettre notre composant App.js

import { SafeAreaView } from 'react-native';
import App from '../App';

const index = () => (
  <SafeAreaView>
    <App />
  </SafeAreaView>
);

export default index;
