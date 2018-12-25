import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";

import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import Text from "../../components/Text";
import Container from "../../components/Container";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import UserService from "../../services/user";
import LoadingService from "../../common/LoadingService";
import Languages from "../../common/Languages";
import Constants from "../../common/Constants";
import Colors from "../../common/Colors";

// import { GoogleSignin } from "react-native-google-signin";
// const FBSDK = require("react-native-fbsdk");
// const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

// GoogleSignin.configure({
//   iosClientId:
//     "1003569726709-65pdbphpc1a08v283ct6llnvqusjid80.apps.googleusercontent.com", // only for iOS
//   webClientId:
//     "1003569726709-ur2ht1reamkb469s93jhdgb54g3i5fof.apps.googleusercontent.com",
//   offlineAccess: false
// });

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  inputs = {};

  focusNextField(key) {
    this.inputs[key].focus();
  }

  // Handle login
  async login (){
    let { username, password } = this.state;
    if (username === "" || password === "") {
      Alert.alert(
        "Login Error",
        "User name and password fields can not be empty."
      );
    }
    else
    {
      try {
        LoadingService.handleLoading(true);
        const res = await UserService.login(username, password);
        console.log("res", res);
        
        // LoadingService.handleLoading(false);
        this.props.goToHome();
      } catch (error) {
        Alert.alert("Validation Error!", "The email or password you entered is incorrect.");
      }
    }
  };

  render() {
    let What = Platform.OS == "ios" ? KeyboardAvoidingView : View;
    return (
      <What behavior="padding" style={styles.keyboard}>
        <Container style={{ backgroundColor: "red" }}>
          <View style={styles.container}>
            <View style={styles.TitleView}>
              <Text style={styles.loginTitle}>Sign In</Text>
            </View>
            <View style={styles.TitleView}>
              <Text style={styles.textLabel}>E-mail</Text>
            </View>
            <InputBox
              isRequire={false}
              blurOnSubmit={false}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Username"
              returnKeyType={"next"}
              view={input => {
                this.inputs["one"] = input;
              }}
              onSubmitEditing={() => {
                this.focusNextField("two");
              }}
              onChangeText={username =>
                this.setState({ username: username.trim() })
              }
            />
            <View style={styles.TitleView}>
              <Text style={styles.textLabel}>Password</Text>
            </View>
            <InputBox
              inputStyle={{ marginTop: 10 }}
              secureTextEntry={true}
              isRequire={false}
              blurOnSubmit={false}
              autoCapitalize="none"
              returnKeyType={"done"}
              placeholder="Password"
              view={input => {
                this.inputs["two"] = input;
              }}
              onSubmitEditing={() => {
                this.login();
              }}
              onChangeText={password => this.setState({ password })}
            />
            <View style={styles.btnContainer}>
              <Button
                style={styles.btnLogin}
                textStyle={styles.btnLoginText}
                title="Sign in"
                onPress={this.login.bind(this)}
              />
            </View>
          </View>
        </Container>
      </What>
    );
  }
}

export default Login;
