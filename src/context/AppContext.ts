import {createContext} from 'react';
import {PostType} from '../models/PostType';
import Post from '../models/Post';

export interface IAppContext {
  startTime: number;
  postType: PostType;
  posts: Post[];
  currentPostIndex: number;
  currentPost: Post | undefined;
  setPostType: (type: PostType) => void;
  setCurrentPostIndex: (index: number) => void;
  restart: () => void;
}

const AppContext = createContext<IAppContext>({
  startTime: 0,
  postType: PostType.Following,
  posts: [],
  currentPostIndex: -1,
  currentPost: undefined,
  setPostType: () => {},
  setCurrentPostIndex: () => {},
  restart: () => {},
});

export default AppContext;
