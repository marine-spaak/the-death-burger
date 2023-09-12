// Rien de trop important à mettre ici, c'est l'entrée de l'app
// Ensuite on va dans app > index.js

// Le fichier app > index.js est le second point d'entrée
// On pose une SafeAreaView et dedans on va mettre notre composant App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, ScrollView } from 'react-native';
import App from './App';
import Alain from './src/components/Home/Alain/Alain';

const Index = () => {
  const Stack = createNativeStackNavigator();

  return (
    // J'ai été obligée d'ajouter independant=true car l'app avait plusieurs containers
    // Je pense que c'est du au fait que j'ai commencé avec expo router
    // Puis j'ai essayé avec react-navigation
    // <NavigationContainer independent={true}>
      <SafeAreaView>
        <ScrollView>
          <App />
          {/* <Stack.Navigator>
            <Stack.Screen name="/" component={App} />
            <Stack.Screen name="Alain" component={Alain} />
          </Stack.Navigator> */}
        </ScrollView>
      </SafeAreaView>
    // </NavigationContainer>
  );
};

export default Index;
