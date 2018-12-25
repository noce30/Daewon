import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import Dimen from '../../common/Dimen';

export default StyleSheet.create({
  wrapContainer: {
    flex: 1,
    backgroundColor: Colors.ScreenBackground,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.ScreenBackground,
    paddingBottom: 10,
    paddingTop: 10,
  },
  checkTemrs: {
    marginTop: 10,
    minHeight: 20,
    alignSelf: 'flex-start'
  },
  btnRegister: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 4,
  },
  btnRegisterText: {
    fontSize: Dimen.FontSize.medium,
    fontWeight: 'bold'
  },
});
