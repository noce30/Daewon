import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from "prop-types";

class TabBarIcon extends Component {
  render() {
    const {
      iconName,
      color
    } = this.props;
    return (
      <View>
        <Icon name={iconName} style={{ color: color, fontSize: 20, marginTop: -5 }} />
      </View>
    );
  }
}

TabBarIcon.propTypes = {
  iconName: PropTypes.string,
  color: PropTypes.string,
};

export default TabBarIcon;
