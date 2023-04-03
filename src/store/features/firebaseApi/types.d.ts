interface AddCommentToArticleRequest {
  comment: {commentId: string} & Comment;
}

interface AddCommentToArticleResponse {
  comment: {commentId: string} & Comment;
}

interface Comment {
  articleId: string;
  parentCommentId: string;
  replies: string[];
  value: string;
}

interface AddCommentRequest extends Comment {
  commentId: string;
}

interface AddCommentResponse {
  [commentId: string]: Comment;
}

interface ArticleResponse {
  comments: Comment[];
}

interface GetCommentsResponse {
  [key: string]: Comment;
}

interface GetCommentsRequest {
  commentIds: string[];
}
