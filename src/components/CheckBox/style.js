import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import Dimen from '../../common/Dimen';

export default StyleSheet.create({
  container: {
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.buttonBackground,
  },

  agreement: {
    flexDirection: 'row',
    minHeight: 30,
    paddingVertical: 5,
    alignItems: 'center',
    marginTop: 10,
  },

  agreementCheck: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },


  agreementText: {
    marginLeft: 25,
    fontSize: Dimen.FontSize.small,
    color: 'black',
  },
});
