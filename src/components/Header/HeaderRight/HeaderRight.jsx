import { DrawerToggleButton } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../../../constants';

const HeaderRight = () => (
  // <DrawerToggleButton>
  //   <FontAwesome5
  //     name="hamburger"
  //     size={25}
  //     color={COLORS.darkYellow}
  //   />
  // </DrawerToggleButton>

  <DrawerToggleButton
    tintColor={COLORS.darkYellow}
  />
);

export default HeaderRight;
