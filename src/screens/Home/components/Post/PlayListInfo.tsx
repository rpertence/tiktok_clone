import React from 'react';
import {View} from 'react-native';
import Text from '../../../../components/Text';
import Playlist from '../../../../components/Icons/Playlist';
import COLORS from '../../../../constants/colors';
import SIZES from '../../../../constants/sizes';
import EStyleSheet from 'react-native-extended-stylesheet';
import FONTS from '../../../../constants/fonts';
import Post from '../../../../models/Post';

interface PlayListInfoProps {
  post: Post;
}

const PlayListInfo = (props: PlayListInfoProps) => {
  return (
    <View style={styles.container}>
      <Playlist color={COLORS.white} width={20} />
      <Text style={styles.text}>Playlist • {props.post.playlist}</Text>
      <Text style={styles.arrow}>􀆊</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#161616',
    width: SIZES.width,
    height: '3.6rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: '1.6rem',
  },
  text: {
    ...FONTS.semibold,
    fontSize: '1.3rem',
    marginLeft: '.4rem',
    flex: 1,
  },
  arrow: {
    ...FONTS.bold,
    fontSize: '1.3rem',
    lineHeight: '1.6rem',
  },
});

export default PlayListInfo;
