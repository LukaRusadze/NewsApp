import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/',
    prepareHeaders: headers => {
      headers.set('Authorization', '4b32e7cc87dc49c89bec6d480f050f98');

      return headers;
    },
  }),
  endpoints: builder => ({
    getNews: builder.query<NewsResponse, Pagination>({
      query: ({page, pageSize}) =>
        `everything?pageSize=${pageSize}&page=${page}&sources=cnn&language=en`,
    }),
    getTopHeadlines: builder.query<NewsResponse, void>({
      query: () => 'top-headlines?',
    }),
  }),
});

export const {useGetNewsQuery, useGetTopHeadlinesQuery} = newsApi;
