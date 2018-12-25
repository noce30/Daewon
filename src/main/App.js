import React from "react";
import Router from "./Router";
import {
  View,
  StyleSheet,
  BackHandler,
  Keyboard,
  StatusBar,
  YellowBox,
  Alert
} from "react-native";
import DeviceInfo from "react-native-device-detection";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MenuContext } from "react-native-menu";
import NavigationService from "../common/NavigationService";
import ProgressView from "../components/ProgressView";
import Constants from "../common/Constants";
import Dimen from "../common/Dimen";
import { EventEmitter } from "../common/Global";
import Utils from "../common/Utils";
import Logging from "../common/Logging";

//Warning
YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated"]);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowTopbar: false,
      isOpen: false,
      router: null,
      stack: []
    };
  }

  closeControlPanel = () => {
    this._drawer.close();
  };

  openControlPanel = () => {
    this._drawer.open();
  };

  OnToggleSideMenu() {
    Keyboard.dismiss();
    this.state.isOpen = !this.state.isOpen;
    if (this.state.isOpen) {
      this._drawer.open();
    } else {
      this._drawer.close();
    }
  }

  componentWillMount() {
    this.onToggleSideMenu = EventEmitter.addListener(
      Constants.Event.ToggleSideMenu,
      this.OnToggleSideMenu.bind(this)
    );
    this.onChangeScreen = EventEmitter.addListener(
      Constants.Event.ChangeScreen,
      this.OnChangeScreen.bind(this)
    );
    this.onShowTopBar = EventEmitter.addListener(
      Constants.Event.ShowTopBar,
      this.OnShowTopBar.bind(this)
    );
    this.onHideTopBar = EventEmitter.addListener(
      Constants.Event.HideTopBar,
      this.OnHideTopBar.bind(this)
    );
  }

  componentWillUnmount() {
    this.onToggleSideMenu.remove();
    this.onChangeScreen.remove();
    this.onShowTopBar.remove();
    this.onHideTopBar.remove();
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      if (this.refs.router && this.refs.router._navigation) {
        if (this.refs.router._navigation.state.routes.length > 1) {
          this.refs.router._navigation.pop();
        } else {
          let screen = this.state.stack.pop();
          if (screen) {
            Utils.navigateAndResetStack(this.refs.router._navigation, screen);
          }
        }
      }
      return true;
    });
  }

  OnChangeScreen(screen) {
    if (this.refs.router && this.refs.router._navigation) {
      this.state.stack.push(
        this.refs.router._navigation.state.routes[0].routeName
      );
      Utils.navigateAndResetStack(this.refs.router._navigation, screen);
      Logging.log(this.refs.router._navigation.state);
    }
    if (screen == Constants.Screen.Login) {
      this.state.stack = [];
    }
  }

  OnShowTopBar() {
    this.setState({ isShowTopbar: true });
  }

  OnHideTopBar() {
    this.setState({ isShowTopbar: false });
  }

  drawerStyles = {
    drawer: {
      shadowOpacity: 0,
      elevation: 0,
      shadowRadius: 0
    },
    main: { paddingLeft: 0 }
  };

  render() {
    let offset = DeviceInfo.isTablet ? 0.7 : 0.4;
    return (
      <MenuContext style={{ flex: 1, backgroundColor: "white" }}>
        <Router
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ProgressView />
      </MenuContext>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapText: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10
  },
  text: {
    fontSize: Dimen.FontSize.small
  }
});

export default App;
