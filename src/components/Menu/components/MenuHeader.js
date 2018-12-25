import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import Avatar from "../../Avatar";

export default class MenuHeader extends Component {
  render() {
    const { userName, imageUrl } = this.props;

    return (
      <View style={styles.header}>
        <Avatar name={userName} size={40} src={imageUrl} />
        <Text style={styles.textName}>{userName}</Text>
      </View>
    );
  }
}
