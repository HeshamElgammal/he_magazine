
import matrics from './matrics';
import universalStyles from './universalStyles';
import fontSizes from './fontSizes';

var heightRef = 710;
var widthRef = 360;

const ratioHeight = matrics.screenHeight / heightRef;
const ratioWidth = matrics.screenWidth / widthRef;

export {
    matrics,
    universalStyles,
    heightRef,
    widthRef,
    ratioHeight,
    ratioWidth,
    fontSizes
};