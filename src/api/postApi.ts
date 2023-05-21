import Answers from '../models/Answers';
import FlashcardPost from '../models/FlashcardPost';
import MCQPost from '../models/MCQPost';
import api from './api';

const getPostFollowing = async () => {
  const result = await api.get('/following');
  return await returnPost(result.data);
};

const getPostForYou = async () => {
  const result = await api.get('/for_you');
  return await returnPost(result.data);
};

const getAnswers = async (id: number) => {
  const result = await api.get(`/reveal?id=${id}`);
  return result.data as Answers;
};

const returnPost = async (data: any) => {
  if (data.type === 'flashcard') {
    return data as FlashcardPost;
  }

  if (data.type === 'mcq') {
    const mcqPost = data as MCQPost;
    mcqPost.answer = await getAnswers(mcqPost.id);
    console.log('answers', mcqPost.answer);

    return mcqPost;
  }

  throw {
    message: 'Type unexpected!',
  };
};

export {getPostFollowing, getPostForYou};
