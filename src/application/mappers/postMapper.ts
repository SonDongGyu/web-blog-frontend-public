import { Post } from '../types/Post';
import { PostPreview } from '../types/PostPreview';

const convertToHomePost = (post: Post): PostPreview => ({
  id: post.id,
  postCardProps: {
    title: post.title,
    creationDate: post.creationDate,
    estimatedTimeToRead: post.estimatedTimeToRead,
    thumbnailUrl: post.thumbnailUrl,
  },
});

export { convertToHomePost };
