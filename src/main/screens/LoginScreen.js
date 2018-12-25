import React from 'react';
import BaseScreen from './BaseScreen';
import Login from '../../pages/Login';
import Constants from '../../common/Constants';
import Utils from '../../common/Utils';

export default class LoginScreen extends BaseScreen {

  static navigationOptions = () => {
    return ({
      header: null
    })
  }

  render() {
    const { navigation } = this.props;
    return <Login navigation={navigation}
      goToHome={() => navigation.navigate(Constants.Screen.Home)} />
  }
}
