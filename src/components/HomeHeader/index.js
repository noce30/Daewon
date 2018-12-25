import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Container from "../Container";
import { styles } from "./styles";
import NavigationService from "../../common/NavigationService";
import Constants from "../../common/Constants";
import Languages from "../../common/Languages";
import Dimen from "../../common/Dimen";

export default class Header extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    showSearch: false,
    searchValue: ""
  };

  onLayout() {
    this.setState({ paddingTop: Dimen.shouldPaddingTop() });
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <View>
        <Container type={"header"}>
          <View style={styles.top}>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => this.props.openMenu()}>
                <Icon name="menu" size={30} color="#678098" />
              </TouchableOpacity>
            </View>
            <View><Text style={styles.title}>{Languages.indexJustOneChesed}</Text></View>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => NavigationService.navigate(Constants.Screen.NewOpportunity)}>
                <Icon name="add-box" size={30} color="#678098" />
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </View>
    );
  }
}
