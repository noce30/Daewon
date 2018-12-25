import React, {Component} from "react";
import {
  View,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./style";
import TabBar from "./components/TabBar";
import Header from "../../components/HomeHeader";
import Container from "../../components/Container";

class Home extends Component {
  // componentWillMount() {
  //   SettingNotificaitonService.isLanguageChage.subscribe(() => {
  //     this.forceUpdate();
  //     this.reloadTab();
  //   })
  // }

  // state = { screenProps: false };

  // reloadTab() {
  //   this.setState({ screenProps: !this.state.screenProps });
  // }

  render() {
    console.log("voooo home");
    
    return (
      <KeyboardAvoidingView
        keyboardShouldPersistTaps={"always"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Header
            style={styles.header}
            goToContact={this.props.goToContact}
            openMenu={this.props.openMenu}
          />
          <Container>
            <TabBar screenProps={this.state} />
          </Container>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Home;
