import User from './User';

interface Post {
  type: string;
  id: number;
  playlist: string;
  description: string;
  user: User;
}

export default Post;
