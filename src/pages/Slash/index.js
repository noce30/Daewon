import React, { Component } from "react";
import { View, ActivityIndicator, Image, Platform, Text } from "react-native";
import styles from "./style";
import Constants from "../../common/Constants";
import Utils from "../../common/Utils";

const logo = require("../../assets/images/daewon-logo.png");

class Slash extends Component {
  async componentWillMount() {
    // const language = await storageService.retrieve(Constants.Store.Language);
    // if (language) {
    //   Languages.setLanguage(language);
    // } else {
    //   Languages.setLanguage(Constants.Settings.en);
    // }

    const { goToLogin } = this.props;

    // wait for x seconds before switching;
    await Utils.wait(Constants.splashScreenWaitTime);
    goToLogin();
    // if (token && chatigytoken) {
    //   if (
    //     Platform.OS === "android" &&
    //     !deviceToken
    //   ) {
    //     PushNotificationService.configure();
    //   }

    //   if (Platform.OS === "ios" && !deviceToken) {
    //     PushNotificationIOSService.init();
    //   }

    //   goToLanding();
    // } else {
    //   goToLogin();
    // }
  }

  componentWillUnmount() {
    // PushNotificationIOSService.messageListener();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.appTitle}>{Constants.appTitle}</Text>
        <ActivityIndicator color={"black"} />
      </View>
    );
  }
}

export default Slash;
