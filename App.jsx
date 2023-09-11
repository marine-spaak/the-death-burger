import { View } from 'react-native-web';
import { Home } from './src/components';
import style from './App.style';

const App = () => (
  <View style={style.appContainer}>
    <Home />
  </View>
);

export default App;
