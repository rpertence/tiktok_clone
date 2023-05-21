import React, {useContext} from 'react';
import Text from '../../../../components/Text';
import {Pressable, TextStyle, View} from 'react-native';
import FONTS from '../../../../constants/fonts';
import COLORS from '../../../../constants/colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppContext from '../../../../context/AppContext';
import {PostType} from '../../../../models/PostType';

interface LinkItemProps {
  type: PostType;
  onSelect: (type: PostType) => void;
}

const LinkItem = (props: LinkItemProps) => {
  const appContext = useContext(AppContext);
  const active = appContext.postType === props.type;
  const font = active ? FONTS.bold : FONTS.regular;
  const textStyle: TextStyle = {
    ...styles.text,
    ...font,
  };

  const label = props.type === PostType.Following ? 'Following' : 'For You';

  return (
    <Pressable
      style={styles.container}
      onPress={() => props.onSelect(props.type)}>
      <Text style={textStyle}>{label}</Text>
      {active && <View style={styles.activeIndicator} />}
    </Pressable>
  );
};

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: '2rem',
    lineHeight: '2rem',
  },
  activeIndicator: {
    height: '0.4rem',
    width: '3rem',
    backgroundColor: COLORS.white,
    marginTop: '.5rem',
  },
});

export default LinkItem;
