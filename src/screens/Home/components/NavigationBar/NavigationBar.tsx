import React from 'react';
import {View} from 'react-native';
import Item from './Item';
import EStyleSheet from 'react-native-extended-stylesheet';
import COLORS from '../../../../constants/colors';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <Item type="home" active={true} />
      <Item type="discover" />
      <Item type="activity" />
      <Item type="bookmarks" />
      <Item type="profile" />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '4.8rem',
  },
});

export default NavigationBar;
