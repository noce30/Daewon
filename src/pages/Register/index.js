import React, {Component} from "react";
import { View, ScrollView, KeyboardAvoidingView } from "react-native";
import Button from "../../components/Button";
import InputBox from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Container from "../../components/Button";
import styles from "./style";
import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";
import Languages from "../../common/Languages";

class Register extends Component {
  state = {
    agreeTerms: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };

  register() {
    const payload = ({
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      agreeTerms
    } = this.state);
    this.props.registerAccount(payload);
  }

  inputs = {};

  focusNextField(key) {
    this.inputs[key].focus();
  }

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <KeyboardAvoidingView style={styles.wrapContainer}>
          <ScrollView>
            <View style={styles.container}>
              <InputBox
                title="screen.register.firstname"
                isRequire={true}
                blurOnSubmit={false}
                autoCapitalize="none"
                returnKeyType={"next"}
                view={input => {
                  this.inputs["firstname"] = input;
                }}
                onSubmitEditing={() => {
                  this.focusNextField("lastname");
                }}
                onChangeText={text => this.setState({ firstName: text.trim() })}
              />
              <InputBox
                title={Languages["screen.register.lastname"]}
                isRequire={true}
                blurOnSubmit={false}
                autoCapitalize="none"
                returnKeyType={"next"}
                view={input => {
                  this.inputs["lastname"] = input;
                }}
                onSubmitEditing={() => {
                  this.focusNextField("email");
                }}
                onChangeText={text => this.setState({ lastName: text.trim() })}
              />
              <InputBox
                title={Languages["screen.register.email"]}
                isRequire={true}
                blurOnSubmit={false}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType={"next"}
                view={input => {
                  this.inputs["email"] = input;
                }}
                onSubmitEditing={() => {
                  this.focusNextField("password");
                }}
                onChangeText={text => this.setState({ email: text.trim() })}
              />
              <InputBox
                secureTextEntry={true}
                isRequire={true}
                blurOnSubmit={false}
                title={Languages["screen.register.password"]}
                autoCapitalize="none"
                returnKeyType={"next"}
                secureTextEntry={true}
                view={input => {
                  this.inputs["password"] = input;
                }}
                onSubmitEditing={() => {
                  this.focusNextField("passwordconfirm");
                }}
                onChangeText={text => this.setState({ password: text.trim() })}
              />
              <InputBox
                secureTextEntry={true}
                isRequire={true}
                blurOnSubmit={false}
                title={Languages["screen.register.passwordconfirm"]}
                autoCapitalize="none"
                returnKeyType={"next"}
                secureTextEntry={true}
                view={input => {
                  this.inputs["passwordconfirm"] = input;
                }}
                onChangeText={text =>
                  this.setState({ passwordConfirm: text.trim() })
                }
              />
              <CheckBox
                title={Languages["screen.register.acceptterms"]}
                style={styles.checkTemrs}
                onChange={newValue => this.setState({ agreeTerms: newValue })}
              />
              <Button
                style={styles.btnRegister}
                textStyle={styles.btnRegisterText}
                title={Languages["screen.register.button"]}
                onPress={this.register.bind(this)}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type == ActionTypes.REGISTER_SUCCESS) {
      this.props.goToLanding();
    }
    if (nextProps.type == ActionTypes.REGISTER_FAIL) {
      Alert("Error", nextProps.message);
    }
  }
}

function mapStateToProps({ register }) {
  return {
    type: register.type,
    isRequesting: register.isRequesting,
    //isLoginSuccess: register.type == ActionTypes.LOGIN_SUCCESS,
    message: register.message,
    index: new Date().getTime()
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
