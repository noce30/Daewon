import { Dimensions, Platform } from "react-native";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
import Languages from "./Languages";

export default {
    Screen: {
        Slash: "Slash",
        Login: "Login",
        Register: "Register",
        UserProfile: "UserProfile",
        Settings: "Settings",
        Home: "Home"
    },

    Store: {
        AccessToken: "@chatigyStore:accessToken19",
        RefreshToken: "@chatigyStore:refreshToken19",
        Settings: "@chatigyStore:settings19",
        User: "User",
        ChatigyAccessToken: "ChatigyAccessToken",
        Language: "Language",
        Country: "Country",
        Notifications: "Notifications",
        DeviceToken: "DeviceToken"
    },
    Event: {
        ToggleSideMenu: "ToggleSideMenu",
        ChangeScreen: "ChangeScreen"
    },
    Settings: {
        recordLocationSetting: "@chatigySetting:recordLocationSetting",
        gpsStatusSetting: "@chatigySetting:gpsStatusSetting",
        en: "en",
        he: "he",
        us: "us",
        il: "il"
    },
    Api: {
        Limit: 10,
        StatusCode: {
            SUCCESS: 200,
            BAD_REQUEST: 400,
            UNAUTHORIZED: 401
        }
    },
    OauthType: {
        google: "google",
        facebook: "facebook"
    },

    // serverDomain: "https://jocapp.four30am.vn:6443",
    membershipApi: "https://daewon.four30am.vn/membership.api",
    daewonApi: "https://daewon.four30am.vn/daewon.api",
    
    splashScreenWaitTime: 1,
    appTitle: 'Daewon Mobile',
    userProfile: "userProfile",
    userIdentifier: 'UserIdentifier',
    realtimeChatApi: "RealtimeChat.Api",
    AdminArea: "adminarea",
    idleTimeout: 600
};
