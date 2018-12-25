import React from 'react';
import BaseScreen from './BaseScreen';
import Constants from "../../common/Constants";
import Slash from '../../pages/Slash';
import Utils from '../../common/Utils';

export default class SlashScreen extends BaseScreen {

    static navigationOptions = () => {
        return ({
            header: null
        })
    };

    render() {
        const {navigation} = this.props;
        return <Slash navigation={navigation}
                      goToLanding={() => Utils.navigateAndResetStack(navigation, Constants.Screen.Landing)}
                      goToLogin={() => Utils.navigateAndResetStack(navigation, Constants.Screen.Login)}/>
    }
}
