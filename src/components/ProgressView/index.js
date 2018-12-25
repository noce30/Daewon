import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import styles from "./style";
import { connect } from "react-redux";
import Colors from "../../common/Colors";

class ProgressView extends React.PureComponent {
  render() {
    let { title, isLoading } = this.props;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <View style={styles.box}>
            <ActivityIndicator size="large" color={Colors.AppColor} />
            {title && <Text style={styles.label}>{title}</Text>}
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ loading }) => {
  return {
    isLoading: loading.isShowLoading
  };
};

export default connect(mapStateToProps)(ProgressView);
