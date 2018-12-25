import React, {Component} from "react";
import { View, Alert } from "react-native";
import styles from "./style";
import UserService from "../../services/user";
import Header from "../../components/Header";
import Languages from "../../common/Languages";
import Button from "../../components/Button";
import Container from "../../components/Container";
import InputBox from "../../components/InputBox";

class ForgotPassword extends Component {
  state = {
    userEmail: ""
  };

  forgotPassword() {
    if (this.state.userEmail === "") {
      Alert.alert("Forgot password Error", "Email field must be entered");
    }

    UserService.forgotPassword(this.state.userEmail)
      .then(() => {
        Alert.alert(
          "Forgot Password",
          "A new password has been generated. Please check your email for details."
        );
      })
      .catch(error => {
        Alert.alert(
          "Forgot Password Error",
          error
            ? error.Message ||
              error.message ||
              error.ErrorMessage ||
              JSON.stringify(error)
            : "Error happened while reseting password"
        );
      });
  }

  render() {
    return (
      <Container style={{ backgroundColor: "white" }} type="header">
        <Header
          goBack={() => this.props.goToLogin()}
          headerTitle={Languages.loginForgotPassword}
        />
        <View style={styles.container}>
          <InputBox
            keyboardType="email-address"
            isRequire={true}
            blurOnSubmit={false}
            autoCapitalize="none"
            returnKeyType={"next"}
            secureTextEntry={true}
            placeholder={Languages.registerVolunteerEnterEmail}
            onChangeText={text => this.setState({ userEmail: text.trim() })}
          />
          <Button
            style={styles.btnForgotPassword}
            textStyle={styles.btnForgotPasswordText}
            title={Languages.loginForgotPassword}
            onPress={this.forgotPassword.bind(this)}
          />
        </View>
      </Container>
    );
  }
}

export default ForgotPassword;
