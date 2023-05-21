import React, {useContext} from 'react';
import LinkItem from './LinkItem';
import {StyleSheet, View} from 'react-native';
import {getSize} from '../../../../constants/sizes';
import {PostType} from '../../../../models/PostType';
import AppContext from '../../../../context/AppContext';

const Links = () => {
  const appContext = useContext(AppContext);

  return (
    <View style={styles.container}>
      <LinkItem type={PostType.Following} onSelect={appContext.setPostType} />
      <View style={styles.separator} />
      <LinkItem type={PostType.ForYou} onSelect={appContext.setPostType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  separator: {
    width: getSize(23.5),
  },
});

export default Links;
