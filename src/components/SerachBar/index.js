import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from "prop-types";

export default class SearchBar extends Component {
  state = { showDeleteTextIcon: false, textValue: "" };

  onIconDeleteTextPress() {
    this.props.onSearch("");
    this.setState({ showDeleteTextIcon: false, textValue: "" });
  }

  onTextChange(text) {
    this.props.onSearch(text);
    this.setState({ textValue: text });
    if (text.length > 0) {
      this.setState({ showDeleteTextIcon: true });
    } else {
      this.setState({ showDeleteTextIcon: false });
    }
  }

  render() {
    const { showDeleteTextIcon, textValue } = this.state;
    return (
      <View style={styles.container}>
        <Icon
          name="magnify"
          size={25}
          color="#ffff"
          onPress={this.onIconDeleteTextPress.bind(this)}
        />
        <TextInput
          value={textValue}
          style={styles.input}
          placeholder="Search for friends"
          underlineColorAndroid="transparent"
          blurOnSubmit={false}
          placeholderTextColor="#ffff"
          onChangeText={text => {
            this.onTextChange.bind(this)(text);
          }}
        />
        {showDeleteTextIcon && (
          <Icon
            name="close"
            size={25}
            color="#ffff"
            onPress={this.onIconDeleteTextPress.bind(this)}
          />
        )}
      </View>
    );
  }
}

SearchBar.proptypes = {
  onSearch: PropTypes.func.isRequired
};
