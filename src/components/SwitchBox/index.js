import React from 'react';
import { View, Image, Text, Switch, TouchableOpacity } from 'react-native';
import styles from './style'
import Colors from '../../common/Colors';

class SwitchBox extends React.PureComponent {

    render() {
        const { inputStyle, inputTextStyle, containerStyle, title, isRequire, onSelect, value, disable, readOnly } = this.props;
        return (
            <View style={[styles.wrapContainer, containerStyle]}>
                <TouchableOpacity activeOpacity={0.9} style={[styles.container, inputStyle, readOnly && styles.readOnly]} onPress={() => { onSelect(!value) }}>
                    <Text
                        numberOfLines={1}
                        style={[styles.input, inputTextStyle]}
                        {...this.props}
                    >
                        {title}
                    </Text>
                    <Switch value={value} onValueChange={(newValue)=>onSelect(newValue)} onTintColor={Colors.AppColor} thumbTintColor={'white'} />
                </TouchableOpacity>
            </View>
        );
    }
}


export default SwitchBox;
