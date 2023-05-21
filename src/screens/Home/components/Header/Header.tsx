import React from 'react';
import Timer from './Timer';
import Links from './Links';
import {View} from 'react-native';
import Search from '../../../../components/Icons/Search';
import COLORS from '../../../../constants/colors';
import {getSize} from '../../../../constants/sizes';
import EStyleSheet from 'react-native-extended-stylesheet';

const Header = () => {
  return (
    <View style={styles.container}>
      <Timer />
      <Links />
      <Search color={COLORS.white} width={getSize(22)} />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '1.6rem',
    height: '6rem',
  },
});

export default Header;
