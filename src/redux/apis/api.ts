// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginType, ProductListResponse, SignupType } from './type'

// Define a service using a base URL and expected endpoints
export const myApi = createApi({
    reducerPath: 'myApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://staging.php-dev.in:8844/trainingapp/api/' }),
    endpoints: (builder) => ({
        getProductByCategory : builder.query({
            query : (id) => `products/getList?product_category_id=${id}`,
            
        }),
        getProductById : builder.query<ProductListResponse, number>({
            query : (id) => `products/getDetail=${id}`,
        }), 
        login : builder.mutation<{data: any }, LoginType>({
            query: (values) => ({
                url: 'users/login',
                method: 'POST',
                body: values,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        register: builder.mutation<{ message: string; data: any }, SignupType>({
            query: (values) => ({
                url: 'users/register',
                method: 'POST',
                body: values,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
    }),
})


export const { useGetProductByCategoryQuery , useGetProductByIdQuery ,useLoginMutation , useRegisterMutation} = myApi