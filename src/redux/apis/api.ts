// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const myApi = createApi({
    reducerPath: 'myApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://staging.php-dev.in:8844/trainingapp/api/' }),
    endpoints: (builder) => ({
        getProductByCategory : builder.query({
            query : (id) => `products/getList?product_category_id=${id}`,
        }),
        getProductById : builder.query({
            query : (id) => `products/getDetail=${id}`,
        }),
        
    }),
})


export const { useGetProductByCategoryQuery , useGetProductByIdQuery } = myApi