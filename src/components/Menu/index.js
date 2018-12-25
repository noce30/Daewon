import React, { Component } from "react";
import { View, Alert, Platform } from "react-native";
import { styles } from "./styles";
import MenuHeader from "./components/MenuHeader";
import MenuItem from "./components/MenuItem";
//import { LoginManager } from "react-native-fbsdk";
import { authorizationTokenService } from "../../common/AuthorizationTokenService";
import storageService from "../../common/StorageService";
import NavigationService from "../../common/NavigationService";
import Languages from "../../common/Languages";
import Constants from "../../common/Constants";
import Container from "../Container";

class Menu extends Component {
  state = { userName: "123", avatar: "" };

  inComming() {
    Alert.alert("", "This feature is coming soon!");
  }

  async handleLogOut() {
    // log out google account
    // const userInfor = await GoogleSignin.signInSilently();
    // if (userInfor) {
    //   await GoogleSignin.revokeAccess();
    //   await GoogleSignin.signOut();
    // }

    // log out facebook account
    // LoginManagerLoginManager.logOut();

    // handle stop push notification
    // if(Platform.OS === "android")
    // {
    //   PushNotificationService.stopPushNotification();
    // }
    // else
    // {
    //   await PushNotificationIOSService.stopPushNotification(); 
    // }

    // handle logout
    authorizationTokenService.logOut().then(() => {
      this.props.navigation.navigate(Constants.Screen.Slash);
    });
  }

  componentWillMount() {
    // storageService.retrieve(Constants.Store.User).then(user => {
    //   let avatarURL = "";
    //   if (user && user.hasAvatar) {
    //     avatarURL = `${Constants.serverDomain}/api/user/GetUserAvatarImage/${user.id}`;
    //   }
    //   else {
    //     avatarURL = `${Constants.serverDomain}/${Constants.AdminArea}/assets/img/avatar-1.png`;
    //   }

    //   this.setState({ userName: user.totalName, avatar: avatarURL });
    // }
    // );

    // SettingNotificaitonService.isLanguageChage.subscribe(() => {
    //   this.forceUpdate();
    // })
  }

  render() {
    const { userName, avatar } = this.state;

    return (
      <View style={styles.container}>
        <Container type="header">
          <MenuHeader userName={userName} imageUrl={avatar} />
        </Container>
        <View style={styles.body}>
          <MenuItem
            name="account"
            size={30}
            text={Languages.myProfile}
            onPress={() => NavigationService.navigate(Constants.Screen.UserProfile)}
          />
          <MenuItem
            name="view-dashboard"
            size={30}
            text={Languages.indexDashboard}
            onPress={() => NavigationService.navigate(Constants.Screen.ChesedDashboard)}
          />
          <MenuItem
            name="settings"
            size={30}
            text={Languages.menuItemSettings}
            onPress={() => NavigationService.navigate(Constants.Screen.Settings)}
          />
          <MenuItem
            name="logout"
            size={30}
            text={Languages.indexLogOut}
            onPress={this.handleLogOut.bind(this)}
          />
        </View>
      </View>
    );
  }
}

export default Menu;
