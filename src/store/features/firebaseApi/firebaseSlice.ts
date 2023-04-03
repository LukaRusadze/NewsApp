import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://newsapp-85381-default-rtdb.europe-west1.firebasedatabase.app/',
  }),
  tagTypes: ['Article'],
  endpoints: builder => ({
    addCommentToArticle: builder.mutation<
      AddCommentToArticleResponse,
      AddCommentToArticleRequest
    >({
      query: ({comment: {commentId, ...rest}}) => ({
        url: `articles/${rest.articleId}/comments/${commentId}.json`,
        body: rest,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, arg) => [
        {type: 'Article', id: arg.comment.articleId},
      ],
    }),
    addComment: builder.mutation<AddCommentResponse, AddCommentRequest>({
      query: ({commentId, ...body}) => ({
        url: `comments/${commentId}.json`,
        body,
        method: 'PUT',
      }),
    }),
    getArticleData: builder.query<ArticleResponse, string>({
      query: articleId => `articles/${articleId}.json`,
      providesTags: (result, error, arg) => [
        {
          type: 'Article' as const,
          id: arg,
        },
        'Article',
      ],
    }),
  }),
});

export const {
  useAddCommentToArticleMutation,
  useAddCommentMutation,
  useGetArticleDataQuery,
} = firebaseApi;
