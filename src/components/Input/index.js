import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style'

class Input extends React.PureComponent {

    render() {
        const {inputStyle, inputTextStyle} = this.props;
        return (
          <View style={[styles.container, inputStyle]}>
              <TextInput
                  underlineColorAndroid = "transparent"
                  style={[styles.input, inputTextStyle]}
                  {...this.props}
              />
          </View>
        );
    }
}


export default Input;
