import { StyleSheet } from "react-native";
import Colors from "../../common/Colors";
import Dimen from "../../common/Dimen";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.ScreenBackground,
    //paddingBottom: 150
    flexDirection: "column"
  },
  keyboard: {
    flex: 1,
    justifyContent: "center"
  },
  space: {
    width: 30,
    marginTop: 8,
    marginHorizontal: 5
  },
  title: {
    color: Colors.headerText,
    fontSize: Dimen.FontSize.large,
    fontWeight: "bold",
    marginVertical: 20
  },
  wrapInput: {
    width: "100%",
    height: 25,
    backgroundColor: "transparent",
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginTop: 15
  },

  input: {
    marginHorizontal: 0,
    height: 40
  },

  btnLogin: {
    flex: 0.3,
    height: 35,
    borderRadius: 4,
    backgroundColor: "#1ab394",
  },
  btnLoginText: {
    fontSize: 14,
    fontWeight: "400",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 15,
    justifyContent: "flex-end",
  },
  btnFacebook: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  },
  btnFacebookText: {
    textAlign: "center",
    color: "white",
    fontSize: Dimen.FontSize.small
    // textDecorationLine: 'underline'
  },
  iconFB: {
    fontSize: 10,
    color: Colors.PrimaryColor,
    backgroundColor: "#ffff",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3
  },
  forgotText: {
    color: Colors.PrimaryColor,
    fontSize: 14,
    textAlign: "right",
  },

  forgotPassword: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "center",
  },
  btnRegisterText: {
    textAlign: "center",
    color: "#E7572B",
    fontSize: Dimen.FontSize.small
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 25,
    width: "100%"
  },
  partDivider: {
    width: "43%",
    backgroundColor: "#e3e8ef",
    height: 1
  },
  textDivider: {
    color: "#6a737c"
  },
  textTile: {
    textAlign: "center",
    fontSize: 14
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  },
  header: {
    height: 100,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 1
  },
  TitleView: {
    width: "100%",
    paddingVertical: 10
  },
  loginTitle: {
    fontSize: 24
  },
  textLabel: {
    color: "#333",
    fontSize: 13
  }
});
