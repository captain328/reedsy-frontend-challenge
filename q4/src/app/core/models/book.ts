import { BookComment } from './book-comment';

export interface Book {
  author: string;
  cover: string;
  rating: number;
  slug: string;
  synopsis: string;
  title: string;
  upvoted: boolean;
  upvotes: number;
  comments: BookComment[];
}
