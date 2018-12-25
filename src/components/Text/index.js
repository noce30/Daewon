import React from "react";
import { Text } from "react-native";
import styles from "./style";

class TextControl extends React.PureComponent {
  render() {
    const { style } = this.props;
    return (
      <Text {...this.props} style={[styles.text, style]}>
        {this.props.children}
      </Text>
    );
  }
}

export default TextControl;
