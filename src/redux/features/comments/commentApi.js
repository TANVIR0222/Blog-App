import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseURL } from "../../../../utils/getBaseURL";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/comments`,
    credentials: "include",
  }),
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    postComments: builder.mutation({
      query: (commentData) => ({
        url: "/post-comment",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: ["Comment"],
    }),
    getComments: builder.query({
      query: () => ({
        url: "/get-comments",
        method: "GET",
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const {  usePostCommentsMutation , useGetCommentsQuery } = commentApi;