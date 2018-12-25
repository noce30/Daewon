import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './style'

class InputBox extends React.PureComponent {

    render() {
        const { inputStyle, inputTextStyle, title, isRequire, keyboardType, readOnly, value, view } = this.props;
        return (
            <View style={styles.wrapContainer}>
                {title && <Text style={styles.title}>{title}{isRequire && !readOnly ? '*' : ''}</Text>}
                <View style={[styles.container, inputStyle, readOnly && styles.readOnly]}>
                    {!readOnly && <TextInput
                        ref={input => { view && view(input) }}
                        keyboardType={keyboardType}
                        underlineColorAndroid="transparent"
                        style={[styles.input, inputTextStyle]}
                        {...this.props}
                    />}
                    {readOnly && <Text
                        keyboardType={keyboardType}
                        underlineColorAndroid="transparent"
                        style={[styles.input, inputTextStyle, { marginLeft: 0 }]}
                        {...this.props}
                    >{value}</Text>}
                </View>
            </View>
        );
    }
}


export default InputBox;
