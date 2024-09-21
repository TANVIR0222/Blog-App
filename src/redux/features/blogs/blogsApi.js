// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseURL } from "../../../../utils/getBaseURL";

// Define a service using a base URL and expected endpoints
export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api`,
    credentials: "include",
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = "", category = "", location = "" }) =>
        `/blogs?search=${search}&category=${category}&location=${location}`,
      providesTags: ["Blogs"],
    }),
    fetchBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
    fetchRelatedBlogs: builder.query({
      query: (id) => `/blogs/realted/${id}`,
    }),
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/create-post",
        method: "POST",
        body: newBlog,
        credentials:'include'
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...res }) => ({
        url: `/update-post/${id}`,
        method: "PATCH",
        body: res,
      }),
      invalidatesTags:['blogs']
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        credentials: true,
      }),
      invalidatesTags:['blogs']
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchBlogsQuery,
  useFetchBlogByIdQuery,
  useFetchRelatedBlogsQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
