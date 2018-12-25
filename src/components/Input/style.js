import { StyleSheet, Platform } from 'react-native';
import Dimen from '../../common/Dimen';

export default StyleSheet.create({
    container: {
        height: 40,
        borderColor: '#e4e4e4',
        borderWidth: 1,
        backgroundColor: '#f4f4f4',

    },

    input: {
        flex: 1,
        padding: 0,
        margin: 5,
        fontSize: Dimen.FontSize.small,
    }
});
