import Post from './Post';

interface FlashcardPost extends Post {
  flashcard_front: string;
  flashcard_back: string;
}

export default FlashcardPost;
