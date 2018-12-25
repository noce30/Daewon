import { StyleSheet } from "react-native";
import Colors from "../../common/Colors";
import Dimen from "../../common/Dimen";

export default StyleSheet.create({
  container: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.buttonBackground,
    borderRadius: 4
  },
  text: {
    fontSize: Dimen.FontSize.medium,
    color: "white",
    fontWeight: "bold"
  }
});
