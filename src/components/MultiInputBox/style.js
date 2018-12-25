import { StyleSheet, Platform } from 'react-native';
import Dimen from '../../common/Dimen';

export default StyleSheet.create({

  wrapContainer: {
    width: '100%',
    marginTop: 5,
  },

  container: {
    width: '100%',
    minHeight: 40,
    borderRadius: 4,
    backgroundColor: '#EFEFF4',
  },
  title: {
    color: '#6F757C',
    fontSize: Dimen.FontSize.small,
    marginBottom: 2,
    marginTop: 5,
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 5,
    fontSize: Dimen.FontSize.medium,
    textAlignVertical: "top",
  }
});
