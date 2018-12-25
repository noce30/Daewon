import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F2F3F8"
  },
  settingBody: {
    flexDirection: "column",
    margin: 10,
    backgroundColor: "#ffff",
    flex: 1,
    padding: 10
  },
  settingItemContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center"
  },
  textTitle: {
    flex: 1,
    textAlign: "left"
  },
  switchContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  textLeft: {
    flex: 1.5
  },
  textRight: {
    flex: 4,
    paddingLeft: 10
  },
  switchButton: {
    flex: 2
  }
});
