import { StyleSheet } from "react-native";
import Colors from "../../common/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.ScreenBackground,
    paddingBottom: 150,
    paddingTop: 30
  },
  image: {
    width: 100,
    height: 57
  },
  appTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20
  }
});
