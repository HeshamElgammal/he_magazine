import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "src/redux/User";
import { RootState, useAppSelector } from "src/redux/store";


function hexToRgbA(hex: any, alpha: any) {
    if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
    }

    if (hex.length < 2 || hex.length > 6) {
        return '';
    }

    var values = hex.split(''),
        r,
        g,
        b;

    if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
    } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
        return '';
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const Colors = ( alpha = 1) => {
    
    // const theme=useAppSelector(selectTheme)
    // const currentTheme = useSelector((state:RootState) => state.users.theme);
    // console.log('ttt',currentTheme);
    // const theemee = useAppSelector((state: RootState) => state.users.theme)
    // console.log('theemee', theemee);
    // console.log(theme);

    // if (theemee == "light") {
        return {
            FirstColor: hexToRgbA('#ECEAE7', alpha),
            SecondColor: hexToRgbA('#131313', alpha), //#dce9ea
            ThirdColor: hexToRgbA('#3D3D3D', alpha),
            ForthColor: hexToRgbA('#131313', alpha),
            FifthColor: hexToRgbA('#95808A', alpha), // grey
            Dark: hexToRgbA('#000', alpha),
            White: hexToRgbA('#FFF', alpha),
            Red: hexToRgbA('#DF281A', alpha),
            Green: hexToRgbA('#25D366', alpha),
            Yellow: hexToRgbA('#F6CB64', alpha),
            Blue: hexToRgbA('#00F', alpha),
            Grey: hexToRgbA('#F3F3F4', alpha),
            SecondGrey: hexToRgbA('#DBD9D6', alpha),         
            ProjectDelete: hexToRgbA('#E74645', alpha),
            BgWelcomeColor: hexToRgbA('#F9FAFE', alpha),
            textInputTextColor: hexToRgbA('#B0B3B4', alpha),
            textInputPlaceholderTextColor: hexToRgbA('#B0B3B4', alpha),
        };
    // } else {
    //     return {
    //         FirstColor: hexToRgbA('#131313', alpha),
    //         SecondColor: hexToRgbA('#F1F6F7', alpha), //#dce9ea
    //         ThirdColor: hexToRgbA('#F3F3F4', alpha),
    //         ForthColor: hexToRgbA('#131313', alpha),
    //         FifthColor: hexToRgbA('#95808A', alpha), // grey
    //         Dark: hexToRgbA('#000', alpha),
    //         White: hexToRgbA('#FFF', alpha),
    //         Red: hexToRgbA('#F00', alpha),
    //         Green: hexToRgbA('#25D366', alpha),
    //         Yellow: hexToRgbA('#F6CB64', alpha),
    //         Blue: hexToRgbA('#00F', alpha),
    //         Grey: hexToRgbA('#F3F3F4', alpha),
    //         SecondGrey: hexToRgbA('#F5f5f5', alpha),
    //         ProjectEdit: hexToRgbA('#20B2A8', alpha),
    //         ProjectDelete: hexToRgbA('#E74645', alpha),
    //         BgWelcomeColor: hexToRgbA('#F9FAFE', alpha),
    //         StatusBarWelcom: hexToRgbA('#EEF7FE', alpha),
    //         WelcomSubTitleColor: hexToRgbA('#00A3B9', alpha),
    //         BodyTextColor: hexToRgbA('#7B7F9E', alpha),
    //         DarkBlue: hexToRgbA('#1B1D28', alpha),
    //         MainAppColor: hexToRgbA('#00A3B9', alpha),
    //         DontHaveAccountTextColor: hexToRgbA('#A19FA8', alpha),
    //         DropDownBorderColor: hexToRgbA('#00A3B933', alpha),
    //         textInputTextColor: hexToRgbA('#B0B3B4', alpha),
    //         activeTabBackgroundColor: hexToRgbA('#E9EDA0', alpha),
    //         TransactionViewBgColor: hexToRgbA('#00A3B921', alpha),
    //         BalanceColor: hexToRgbA('#04A457', alpha),
    //         DefaultStoreItemColor: '#BFE8CE',
    //     };
    // }
};