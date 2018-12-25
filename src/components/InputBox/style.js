import { StyleSheet, Platform } from 'react-native';
import Dimen from '../../common/Dimen';

export default StyleSheet.create({

  wrapContainer: {
    width: '100%',
    marginTop: 5,
  },

  container: {
    width: '100%',
    height: 35,
    borderRadius: 4,
    //backgroundColor: '#EFEFF4',
    borderColor: "#ced4da",
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  readOnly: {
    height: 30,
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFF4'
  },
  title: {
    color: '#6F757C',
    fontSize: Dimen.FontSize.small,
    marginBottom: 2,
    marginTop: 5,
    textAlign: "left"
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 5,
    color: 'black',
    fontSize: Dimen.FontSize.medium,
  }
});
