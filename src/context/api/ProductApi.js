import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({
        url: "/products/search",
        params,
      }),
      providesTags: ["Product"],
    }),
    // Post request
    createProduct: build.mutation({
      query: (body) => ({
        url: "/products/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    // Patch request
    updateProduct: build.mutation({
      query: ({ _id, body }) => ({
        url: `/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    // Delete request
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    postSignIn: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  usePostSignInMutation,
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productApi;
