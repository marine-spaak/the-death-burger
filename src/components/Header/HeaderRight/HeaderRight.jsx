import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../../../constants';

const HeaderRight = () => (
  <TouchableOpacity
    onPress={() => {}}
  >
    <FontAwesome5
      name="hamburger"
      size={25}
      color={COLORS.darkYellow}
    />
  </TouchableOpacity>
);

export default HeaderRight;
