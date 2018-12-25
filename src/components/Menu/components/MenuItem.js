import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class MenuItem extends Component {
  render() {
    const { name, size, color, text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <Icon name={name} size={size} color={color} />
        <Text style={styles.textItem}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
