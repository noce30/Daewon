import { StyleSheet } from "react-native";
import Dimen from "../../common/Dimen";

export const styles = StyleSheet.create({
    top: {
        flexDirection: "row",
        backgroundColor: "#ffff",
        borderColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        //paddingVertical: 5,
        width: "100%",
        height: Dimen.isIOs() ? 50 : 50
    },
    logo: {
        fontSize: 20,
        color: "#fff",
        margin: 10
        // comment for IOS
        // fontFamily: 'Co Headline Corp Bold',
    },
    icons: {
        flexDirection: "row"
    },
    title: {
        fontWeight: "bold",
        fontSize: 24
    }
});