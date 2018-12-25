import React, { Component } from "react";
import BaseScreen from "./BaseScreen";
import ForgotPassword from "../../pages/ForgotPassword";
import Constants from "../../common/Constants";

export default class ForgotPasswordScreen extends BaseScreen {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <ForgotPassword
        navigation={navigation}
        goToLogin={() => navigation.navigate(Constants.Screen.Login)}
      />
    );
  }
}
