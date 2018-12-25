import { Platform, StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import Dimen from '../../common/Dimen';

export default StyleSheet.create({
    container: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.AppColor
    },
    text: {
        fontSize: Dimen.FontSize.small,
        color: 'black'
    }
});
