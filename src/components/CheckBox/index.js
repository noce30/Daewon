import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./style";

class CheckBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      agree: false
    };
  }

  onChecked() {
    this.props.onChange(!this.state.agree);
    this.setState({ agree: !this.state.agree });
  }

  componentWillMount() {
    const { value } = this.props;
    const defaulValue = value != undefined ? value : false;

    this.setState({
      agree: defaulValue
    });
  }

  render() {
    const { title, style, textStyle, disable, value } = this.props;

    if (disable === true) {
      return (
        <View style={[styles.agreement, style, { opacity: 0.5 }]}>
          <View style={[styles.agreementBox]} />
          {this.state.agree && (
            <Image
              style={styles.agreementCheck}
              source={require("@images/ic_check.png")}
            />
          )}
          {!this.state.agree && (
            <Image
              style={styles.agreementCheck}
              source={require("@images/ic_uncheck.png")}
            />
          )}
          <Text style={styles.agreementText}>{title}</Text>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.agreement, style]}
          onPress={this.onChecked.bind(this)}
        >
          {this.state.agree && (
            <Image
              style={styles.agreementCheck}
              source={require("@images/ic_check.png")}
            />
          )}
          {!this.state.agree && (
            <Image
              style={styles.agreementCheck}
              source={require("@images/ic_uncheck.png")}
            />
          )}
          <Text style={styles.agreementText}>{title}</Text>
        </TouchableOpacity>
      );
    }
  }
}

export default CheckBox;
