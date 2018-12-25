import { createMaterialTopTabNavigator } from "react-navigation";
import React from "react";
import TabBarIcon from "./TabBarIcon";
import { View, Text } from "react-native"
import Languages from "../../../common/Languages";


const SearchScreen = () => {
    return <View><Text>123</Text></View>;
};

const ChesedFeedScreen = () => {
    return <View><Text>123</Text></View>;
};

const PrivateChatsScreen = () => {
    return <View><Text>123</Text></View>;
};

export default createMaterialTopTabNavigator(
    {
        Search: SearchScreen,
        ChesedFeed: ChesedFeedScreen,
        PrivateChats: PrivateChatsScreen
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;

            const config =
                routeName === "Search"
                    ? { iconName: "wechat", tabBarColor: "#1F65FF" }
                    : { iconName: "menu", tabBarColor: "#D02760" };
            const title = routeName === "ChesedFeed"
                ? Languages.leftMenuChesedFeed : (routeName === "PrivateChats" ? Languages.leftMenuPrivateChats : Languages.addEditEventBrowse);

            return {
                tabBarColor: config.tabBarColor,
                title: title
            };
        },
        initialRouteName: "Search",
        labeled: false,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            upperCaseLabel: false,
            labelStyle: {
                fontSize: 12,
                margin: 0,
                marginTop: 3,
                fontWeight: "bold"
            },
            style: {
                height: 40,
                padding: 0,
                backgroundColor: "#007dd4",
            }
        }
    }
);
