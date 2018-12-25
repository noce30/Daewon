import React from "react";
import Settings from "../../pages/Setting";
import Constants from "../../common/Constants";

export default class SettingsScreen extends React.Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  render() {
    const { navigation } = this.props;

    return (
      <Settings
        navigation={navigation}
        goToHome={() => navigation.navigate(Constants.Screen.Landing)}
      />
    );
  }
}
