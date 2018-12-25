import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './style'

class Button extends React.PureComponent {

    render() {
        const { onPress } = this.props;
        return (
            <TouchableOpacity style={styles.buttonUp} onPress={() => onPress()}>
                {/* <Image style={styles.buttonUpImage} source={require('@images/ic_arrow_up.png')} /> */}
            </TouchableOpacity>
        );
    }
}


export default Button;
