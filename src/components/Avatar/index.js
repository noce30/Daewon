import React, { Component } from "react";
import { View } from "react-native";
import UserAvatar from "react-native-user-avatar";

export default class Avatar extends Component {
  render() {
    const { name, src, size, active } = this.props;
    const activeColor = active ? "#0ADCAB" : "#F08128";

    return (
      <View>
        <UserAvatar name={name} size={size} src={src} />
        {active !== undefined && (
          <View
            style={{
              backgroundColor: activeColor,
              height: 10,
              width: 10,
              borderRadius: 5,
              position: "absolute",
              bottom: 0,
              right: 0,
              borderColor: "#ffff",
              borderWidth: 2
            }}
          />
        )}
      </View>
    );
  }
}
