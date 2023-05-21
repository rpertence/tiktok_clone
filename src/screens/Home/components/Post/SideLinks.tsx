import React from 'react';
import Heart from '../../../../components/Icons/Heart';
import SideLinkItem from './SideLinkItem';
import COLORS from '../../../../constants/colors';
import {View} from 'react-native';
import Comments from '../../../../components/Icons/Comments';
import Share from '../../../../components/Icons/Share';
import Save from '../../../../components/Icons/Save';
import {getSize} from '../../../../constants/sizes';
import EStyleSheet from 'react-native-extended-stylesheet';
import User from '../../../../models/User';
import Avatar from './Avatar';

interface SideLinksProps {
  user: User;
}

const SideLinks = (props: SideLinksProps) => {
  return (
    <View style={styles.container}>
      <Avatar user={props.user} />
      <SideLinkItem
        icon={<Heart color={COLORS.white} width={getSize(28)} />}
        label="87"
      />
      <SideLinkItem
        icon={<Comments color={COLORS.white} width={getSize(27)} />}
        label="2"
      />
      <SideLinkItem
        icon={<Share color={COLORS.white} width={getSize(26)} />}
        label="17"
      />
      <SideLinkItem
        icon={<Save color={COLORS.white} width={getSize(22)} />}
        label="203"
      />
      <SideLinkItem iconText="􀖋" fontSize={34} label="Flip" />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '-1.6rem',
  },
});

export default SideLinks;
