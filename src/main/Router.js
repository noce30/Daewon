import React from "react";
import {
  StackNavigator,
  DrawerNavigator
} from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import SlashScreen from "./screens/SlashScreen";
import Menu from "../components/Menu";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Colors from "../common/Colors";
import Constants from "../common/Constants";
import Dimen from "../common/Dimen";
import Homecreen from "./screens/HomeScreen";

//Menu bar
const HomeNavigator = DrawerNavigator(
  { Map: { screen: Homecreen } },
  {
    headerMode: "none",
    drawerWidth: (Dimen.getScreenWidth() * 3) / 4,
    drawerPosition: "left",
    contentComponent: props => <Menu {...props} />
  }
);

//Route configs
var screens = {};
screens[Constants.Screen.Login] = { screen: LoginScreen };
screens[Constants.Screen.Home] = {
  screen: HomeNavigator,
  navigationOptions: {
    header: null
  }
};
screens[Constants.Screen.Slash] = { screen: SlashScreen };
screens[Constants.Screen.ForgotPassword] = { screen: ForgotPasswordScreen };
screens[Constants.Screen.Settings] = { screen: SettingsScreen };

//StackNavigator
export default StackNavigator(screens, {
  initialRouteName: Constants.Screen.Slash,
  mode: "card",
  navigationOptions: {
    headerStyle: { backgroundColor: Colors.AppColor },
    headerTitleStyle: { color: "white" }
  }
});
