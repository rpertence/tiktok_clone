import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const sizeFactor = 1;
const rem = sizeFactor * 10;

const {width, height} = Dimensions.get('window');

EStyleSheet.build({
  $rem: rem,
});

// maybe we might need to change the sizeFactor value in the future to
// get better layout results in smaller or bigger screen sizes
// if sizeFactor changes to another value tham 1, it should be used in the getSize function
export const getSize = (size: number) => size;

const SIZES = {
  width,
  height,
};

export default SIZES;
