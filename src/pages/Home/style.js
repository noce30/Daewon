import { StyleSheet, Platform } from "react-native";
import Colors from "../../common/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F8"
  },
  bodyContainer: {
    margin: 10
  },
  header: {
    flex: 1
  },
  searchWrapper: {
    backgroundColor: "#ffff",
    padding: 20,
    marginTop: 15
  },
  input: {
    borderRadius: 15,
    height: 30
  },
  distanceWrapper: {
    marginVertical: 15
  },
  pickerWrapper: {
    borderColor: "#EFEFF4",
    borderWidth: 1
  },
  picker: {
    height: 30
  },
  actionsWrapper: {
    flexDirection: "row",
    height: 30
  },
  btnSearch: {
    height: 30
  },
  iconSearch: {
    fontSize: 15
  },
  searchText: {
    color: "#ffff"
  },
  btnReset: {
    height: 30,
    borderColor: Colors.lightgray,
    borderWidth: 1,
    marginLeft: 15
  },
  iconReset: {
    fontSize: 15,
    color: "#575962"
  },
  resetText: {
    color: "#575962"
  },
  textFilters: {
    backgroundColor: Colors.SuccessColor,
    height: 30,
    width: 80,
    borderRadius: 0,
    color: "#ffff",
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: 'center',
    paddingTop: Platform.OS === "ios" ? 5 : 0
  },
  totalEvents: {
    marginTop: 10
  },
  tobFiltersWrapper: {
    position: "absolute",
    top: 0,
    zIndex: 1000,
    marginLeft: 20
  },
  multipleSelectWrapper: {
    marginBottom: 15,
    marginTop: 5
  },
  listOpportunities: {
    backgroundColor: "#ffff",
    padding: 20,
    marginTop: 15
  },
  opportunitiesWrapper: {
    marginTop: 20
  },
  textOpportunities: {
    backgroundColor: Colors.SuccessColor,
    height: 30,
    width: 120,
    borderRadius: 0,
    color: "#ffff",
    textAlign: "center",
    textAlignVertical: "center",
    paddingTop: Platform.OS === "ios" ? 5 : 0
  },
  textOpportunitiesTitle: {
    color: "#ffb822",
    fontSize: 14,
    marginBottom: 5
  },
  textOpportunitiesSuccess: {
    color: "#34bfa3",
    fontSize: 18,
    marginBottom: 5
  },
  OpportunitiesContent: {
    flexDirection: "row",
    marginBottom: 10
  },
  commentInfor: {
    flex: 1,
    justifyContent: "center"
  },
  content: {
    flex: 2,
    textAlign: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  textLink: {
    color: "#0373b1"
  },
  totalComments: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#716aca"
  },
  commentText: {
    textAlign: "center",
    fontSize: 10
  },
  textBottom: {
    color: "#898b96",
    marginBottom: 5
  },
  opportunitiesItemContainer: {
    borderColor: "rgba(69,65,78,.08)",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  },
  volunteerButton: {
    borderColor: "#ebedf2",
    borderWidth: 1,
    borderRadius: 15,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 120
  },
  iosPicker: {
    borderColor: "#EFEFF4",
    borderWidth: 1
  },
  iosPickerWrapper: {
    marginTop: 5
  },
  createOpportunityWrapper: {
    position: "absolute",
    top: 0,
    zIndex: 1000,
    right: 20
  },
  textCreateOpportunity: {
    backgroundColor: Colors.PrimaryColor,
    height: 30,
    width: 140,
    borderRadius: 0,
    color: "#ffff",
    textAlign: "center",
    textAlignVertical: "center",
    paddingTop: Platform.OS === "ios" ? 5 : 0
  },
  multipleSelect: {
    height: 30,
    borderColor: "#EFEFF4",
    borderWidth: 1,
    paddingLeft: 5
  }
});
