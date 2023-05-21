import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import User from '../../../../models/User';
import EStyleSheet from 'react-native-extended-stylesheet';
import COLORS from '../../../../constants/colors';
import Text from '../../../../components/Text';
import AppContext from '../../../../context/AppContext';
import {PostType} from '../../../../models/PostType';

interface AvatarProps {
  user: User;
}

const Avatar = (props: AvatarProps) => {
  const appContext = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{
          uri: props.user.avatar,
        }}
      />
      {appContext.postType === PostType.ForYou && (
        <View style={styles.addContainer}>
          <Text>􀅼</Text>
        </View>
      )}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginBottom: '2.7rem',
    alignItems: 'center',
  },
  image: {
    width: '4.5rem',
    height: '4.5rem',
    borderRadius: '2.3rem',
    backgroundColor: '#fff',
    borderWidth: '.1rem',
    borderColor: COLORS.white,
  },
  addContainer: {
    width: '2.4rem',
    height: '2.4rem',
    borderRadius: '1.2rem',
    backgroundColor: '#28B18F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-1.2rem',
  },
});

export default Avatar;
