import { Platform } from "react-native";

const Fonts = {
    AkiraExpandedDemo: Platform.OS == 'ios' ? 'AkiraExpanded-SuperBold' : 'Akira-Expanded-Demo',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsItalic: 'Poppins-Italic',
    PoppinsLight: 'Poppins-Light',
    PoppinssemiBold: 'Poppins-SemiBold',
    PoppinsBold: 'Poppins-Bold',
};
export default Fonts;
