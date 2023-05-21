/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef, useState} from 'react';
import {IAppContext} from '../context/AppContext';
import {PostType} from '../models/PostType';
import Post from '../models/Post';
import {getPostFollowing, getPostForYou} from '../api/postApi';

const useAppContext = () => {
  const [postType, setPostType] = useState(PostType.Following);
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const startTime = useRef(new Date().getTime());

  useEffect(() => {
    if (posts.length === 0) {
      getNewPosts(3);
    } else if (index > posts.length - 2) {
      getNewPosts(posts.length - index);
    }
  }, [index, posts]);

  useEffect(() => {
    restart();
  }, [postType]);

  const getNewPosts = async (count: number) => {
    const postArray = [];

    for (let i = 0; i < count; i++) {
      const newPost =
        postType === PostType.Following
          ? await getPostFollowing()
          : await getPostForYou();

      postArray.push(newPost);
    }

    setPosts([...posts, ...postArray]);
  };

  const restart = () => {
    setIndex(0);
    setPosts([]);
  };

  const appContext: IAppContext = {
    startTime: startTime.current,
    postType,
    posts,
    currentPostIndex: index,
    currentPost: posts && posts[index],
    setPostType,
    setCurrentPostIndex: setIndex,
    restart,
  };

  return appContext;
};

export default useAppContext;
