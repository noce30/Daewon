import { NavigationActions, StackActions } from "react-navigation";

var moment = require("moment");

let Utils = {};

Utils.checkEmail = function (val) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
};

Utils.navigateAndResetStack = function (navigation, screen) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: screen })]
    });
    navigation.dispatch(resetAction);
};

Utils.formatDateTime = function (timestamp) {
    return moment(timestamp).format(global.appLang.timeFormat);
};
/**
 * Get format with shortdate instead of full timestamp
 * @param {} timestamp
 */
Utils.formatShortDate = function (timestamp) {
    return moment(timestamp).format(global.appLang.timeFormat.split("-")[0]);
};

Utils.getDurationTime = function (timestamp) {
    let time = moment(timestamp); //.format(global.appLang.timeFormat)
    let now = moment();
    let duration = moment.duration(now.diff(time));
    // Logging.log(duration.days() +'-'+ duration.humanize());
    return duration.days() === 0
        ? duration.humanize() + " ago"
        : moment(timestamp).format(global.appLang.timeFormat);
};

Utils.getTimeStamp = function (timestamp) {
    let time = moment(timestamp); //.format(global.appLang.timeFormat)
    return time.toDate().getTime();
};

Utils.fraction = function (latitude) {
    latitude = Math.abs(latitude);
    let degree = latitude;
    latitude *= 60;
    latitude -= degree * 60;
    let minute = latitude;
    latitude *= 60;
    latitude -= minute * 60;
    let second = latitude * 1000;

    return degree + "/1," + minute + "/1," + second + "/1000,";
};

Utils.matchPassword = (password, confirmPassword) => {
    return password === confirmPassword;
};

Utils.wait = async (waitTime) => {
    if (!waitTime) {
        waitTime = 2;
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, (waitTime) * 1000);
    });
};

export default Utils;
