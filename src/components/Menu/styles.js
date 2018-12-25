import { StyleSheet } from "react-native";
import Colors from "../../common/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    height: 55,
    backgroundColor: Colors.AppColor,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  textName: { color: "#ffff", marginLeft: 15 },
  body: { flex: 7, paddingHorizontal: 10 },
  menuItem: { flexDirection: "row", padding: 5, alignItems: "center" },
  textItem: { marginLeft: 10, color: Colors.AppGreenColor }
});
