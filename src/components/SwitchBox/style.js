import { StyleSheet, Platform } from 'react-native';
import Dimen from '../../common/Dimen';

export default StyleSheet.create({

  wrapContainer: {
    width: '100%',
    marginTop: 5,
  },

  container: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFF4',
    alignItems: 'center',
    flexDirection: 'row',
  },
  readOnly: {
    height: 30,
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFF4'
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
    color: 'black',
    fontSize: Dimen.FontSize.medium,
  },
  title: {
    color: '#6F757C',
    fontSize: Dimen.FontSize.small,
    marginBottom: 2,
    marginTop: 5,
  },
  selectBoxArrow: {
    position: 'absolute',
    top: 15,
    right: 5,
    width: 10,
    height: 10,
    resizeMode: 'contain',
  }
});
