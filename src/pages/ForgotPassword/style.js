import { StyleSheet } from "react-native";
import Dimen from "../../common/Dimen";
import Colors from "../../common/Colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.ScreenBackground,
    paddingBottom: 10,
    paddingTop: 10
  },
  btnForgotPassword: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 4,
    backgroundColor: Colors.PrimaryColor
  },
  btnForgotPasswordText: {
    fontSize: Dimen.FontSize.medium,
    fontWeight: '400',
  },
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
