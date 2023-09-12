import {
  View, Text, TouchableOpacity, Image, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { images, COLORS, SIZES } from '../../../constants';

import style from '../Home.style';
import specificStyle from './Alain.style';

const Others = () => (
  <View>
    <View style={style.subtitleContainer}>
      <Ionicons
        name="heart"
        size={32}
        color={COLORS.darkRed}
        style={style.icon}
      />
      <Text style={style.subtitleText}>Alain Chabat</Text>
    </View>

    <View style={specificStyle.alainContainer}>
      {/* Pour rendre l'image cliquable, il faudrait lui ajouter */}
      {/* un wrapper "Touchable Opacity" */}
      <Image
        source={images.alain}
        style={specificStyle.alainPicture}
      />
      <View style={specificStyle.alainText}>
        <Text style={specificStyle.alainParagraph}>
          Vous aussi vous trouvez qu'Alain Chabat est merveilleux, drôle et attendrissant ?
        </Text>

        <Text style={specificStyle.alainParagraph}>
          Vous pouvez lui écrire pour lui dire et ainsi réchauffer son petit cœur.
        </Text>

        <TouchableOpacity
          style={specificStyle.alainContactBtn}
          onPress={() => {
            Linking.openURL('https://artistes-productions.com/2019/08/07/contacter-alain-chabat-l-ecrire-a-alain-chabat/');
          }}
        >
          <Text
            style={specificStyle.alainContactText}
            resizeMode="contain"
          >
            Lui écrire !
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Others;
