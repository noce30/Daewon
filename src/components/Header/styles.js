import { StyleSheet } from "react-native";
import Colors from "../../common/Colors";

export default StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.AppColor
  },
  headerContent: {
    flexDirection: "row"
  },
  textHeader: {
    color: "#ffff",
    fontSize: 14
  },
  headerIcon: {
    marginHorizontal: 15
  }
});
