import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './style'

class MultiInputBox extends React.PureComponent {

    render() {
        const {inputStyle, inputTextStyle, title, holder, isRequire} = this.props;
        return (
          <View style={styles.wrapContainer}>
              {title&&<Text style={styles.title}>{title}{isRequire?'*':''}</Text>}
              <View style={[styles.container, inputStyle]}>
                <TextInput
                    underlineColorAndroid = "transparent"
                    placeholder={holder}
                    style={[styles.input, inputTextStyle]}
                    {...this.props}
                />
              </View>
          </View>
        );
    }
}


export default MultiInputBox;
