import React from 'react';
import {View} from 'react-native';
import styles from './style'

export default class Separator extends React.PureComponent {

    render() {
        const {style} = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.separator,style]}/>
            </View>
        );
    }
}
