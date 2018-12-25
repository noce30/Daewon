
import { Dimensions, Platform } from "react-native"

function Dimen() { };

Dimen.isLandscape = function () {
    const widthScreen = Dimensions.get('window').width;
    const heightScreen = Dimensions.get('window').height;
    return widthScreen > heightScreen
};

Dimen.getScreenWidth = function () {
    return Dimensions.get('window').width;
};

Dimen.getScreenHeight = function () {
    return Dimensions.get('window').height;
};

Dimen.isIOs = () => {
    return Platform.OS === 'ios';
};

Dimen.FontSize = {
    superTiny: 8,
    tiny: 10,
    small: 12,
    medium: 14,
    big: 19,
    large: 20,
    superLarge: 26
};

Dimen.isIphoneX = () => {
    let d = Dimensions.get('window');
    const { height, width } = d;

    return (
        // This has to be iOS duh
        Platform.OS === 'ios' &&

        // Accounting for the height in either orientation
        (height === 812 || width === 812)
    );
};

Dimen.shouldPaddingTop = () => {
    let padding = 0;
    if (Dimen.isIOs()) {
        if (Dimen.isIphoneX()) {
            padding = 40;
        } else {
            padding = 20;
        }
        if (Dimen.isLandscape()) {
            padding = 0;
        }

    }
    return padding;
};

Dimen.shouldPaddingHorizontal = () => {
    let padding = 0;
    if (Dimen.isIphoneX() && Dimen.isLandscape()) {
        padding = 30;
    } else {
        padding = 0;
    }
    return padding;
};

export default Dimen;
