import Answers from './Answers';
import Option from './Option';
import Post from './Post';

interface MCQPost extends Post {
  question: string;
  options: Option[];
  answer: Answers;
}

export default MCQPost;
