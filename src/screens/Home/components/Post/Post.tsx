import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import SideLinks from './SideLinks';
import UserInfo from './UserInfo';
import PlayListInfo from './PlayListInfo';
import FlashcardPostModel from '../../../../models/FlashcardPost';
import FlashcardPost from './FlashcardPost';
import {ActivityIndicator, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import SIZES, {getSize} from '../../../../constants/sizes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PostModel from '../../../../models/Post';
import AppContext from '../../../../context/AppContext';
import MCQPostModel from '../../../../models/MCQPost';
import MCQPost from './MCQPost/MCQPost';

const Post = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const appContext = useContext(AppContext);

  const loadPost = (post: PostModel) => {
    if (post.type === 'flashcard') {
      const flashcard = post as FlashcardPostModel;
      return <FlashcardPost model={flashcard} />;
    } else if (post.type === 'mcq') {
      const mcq = post as MCQPostModel;
      return <MCQPost model={mcq} />;
    }
  };

  const renderPost = (post: PostModel) => {
    return (
      <>
        <View style={styles.postContainer}>
          <View style={styles.left}>
            {loadPost(post)}
            <UserInfo post={post} />
          </View>
          <SideLinks user={post.user} />
        </View>
        <PlayListInfo post={post} />
      </>
    );
  };

  const carouselHeight =
    SIZES.height -
    safeAreaInsets.top -
    safeAreaInsets.bottom -
    getSize(60) -
    getSize(48);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#001D28', '#00425A']}>
      {appContext.posts.length === 0 && (
        <View style={{...styles.loadingContainer, height: carouselHeight}}>
          <ActivityIndicator />
        </View>
      )}
      {appContext.posts.length > 0 && (
        <Carousel
          loop={false}
          height={carouselHeight}
          vertical={true}
          data={appContext.posts}
          scrollAnimationDuration={200}
          onSnapToItem={index => {
            if (index === 0 && appContext.currentPostIndex === 0) {
              appContext.restart();
            } else {
              appContext.setCurrentPostIndex(index);
            }
          }}
          renderItem={({item}) => renderPost(item)}
        />
      )}
    </LinearGradient>
  );
};

const styles = EStyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
  },
  postContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: '1.6rem',
  },
  left: {
    flex: 1,
    paddingRight: '1.6rem',
  },
});

export default Post;
