import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { headerTitle, goBack } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerContent} onPress={goBack}>
          <Icon
            name="arrow-back"
            color="#fff"
            size={23}
            style={styles.headerIcon}
          />
          <Text style={styles.textHeader}>{headerTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
