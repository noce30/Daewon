import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style'

class Button extends React.PureComponent {

    render() {
        const { onPress, title, style, textStyle, disable } = this.props;
        const disabledStyle = disable ? { opacity: 0.5 } : {};
        if(disable) {
            return (
                <View style={[styles.container, style, disabledStyle]} disabled={disable}>
                    <Text style={[styles.text, textStyle]}>
                        {title}
                    </Text>
                </View>
            );

        } else {
            return (
                <TouchableOpacity onPress={() => onPress()} style={[styles.container, style, disabledStyle]} disabled={disable}>
                    <Text style={[styles.text, textStyle]}>
                        {title}
                    </Text>
                </TouchableOpacity>
            );
        }
    }
}


export default Button;
