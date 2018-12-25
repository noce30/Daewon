import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  buttonUp: {
    position: 'absolute',
    bottom: 5,
    backgroundColor: Colors.ScreenBackground,
    right: 5,
    borderRadius: 20,
    elevation: 5,
    padding: 10,
  },
  buttonUpImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
