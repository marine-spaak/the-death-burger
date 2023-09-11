import { View } from 'react-native';
import style from './App.style';

import { Home } from './src/components';

const App = () => (
  <View style={style.appContainer}>
    <Home />
  </View>
);

export default App;
