import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Animated
} from 'react-native';
import Dimen from '../../common/Dimen';
import Colors from '../../common/Colors';

export default class Container extends Component {

    state = {
        fadeAnim: new Animated.Value(0),
        lastOrientation: Dimen.isLandscape(),
        paddingTop: Dimen.shouldPaddingTop(),
        paddingHorizontal: Dimen.shouldPaddingHorizontal(),
    }

    onLayout() {
        this.setState({ paddingTop: Dimen.shouldPaddingTop(), paddingHorizontal: Dimen.shouldPaddingHorizontal() })
    }

    render() {
        return <View style={[
            styles.container,
            this.props.type == 'header' ? {
                paddingTop: this.state.paddingTop
            }
            :{
                flex : 1,
                },
            {
                paddingHorizontal: this.state.paddingHorizontal,
                backgroundColor: this.props.type == 'header' ? Colors.AppBarColor : 'transparent'
            },
            this.props.style&&this.props.style]}
            onLayout={this.onLayout.bind(this)}>
            {this.props.children}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});
