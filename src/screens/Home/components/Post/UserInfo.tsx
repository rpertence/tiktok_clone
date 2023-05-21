import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Text from '../../../../components/Text';
import Post from '../../../../models/Post';

interface UserInfoProps {
  post: Post;
}

const UserInfo = (props: UserInfoProps) => {
  return (
    <>
      <Text style={styles.authorName}>{props.post.user.name}</Text>
      <Text style={styles.topic}>{props.post.description}</Text>
    </>
  );
};

const styles = EStyleSheet.create({
  authorName: {
    fontSize: '1.6rem',
    lineHeight: '1.9rem',
  },
  topic: {
    fontSize: '1.4rem',
    lineHeight: '1.7rem',
  },
});

export default UserInfo;
