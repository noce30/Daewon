import React from 'react';
import BaseScreen from './BaseScreen';
import Home from '../../pages/Home';

export default class Homecreen extends BaseScreen {

  static navigationOptions = () => {
    return ({
      header: null
    })
  }

  render() {
    const { navigation } = this.props;
    return <Home navigation={navigation} />
  }
}
