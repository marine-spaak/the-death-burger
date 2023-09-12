import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';

const HeaderLeft = ({ backFunction }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={backFunction}
    >
      <Ionicons
        name="arrow-back-circle"
        size={33}
        color={COLORS.darkRed}
      />
    </TouchableOpacity>
  );
};

HeaderLeft.propTypes = {
  backFunction: PropTypes.func.isRequired,
};

export default HeaderLeft;
