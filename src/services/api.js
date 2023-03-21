import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => `orders`,
    }),
    getCustomers: builder.query({
      query: () => `customers`,
    }),
    getCustomerInfo: builder.query({
      query: (id) => `customers/${id}`,
    }),
    getOrdersByCustomer: builder.query({
      query: (id) => `orders?customerId=${id}`,
    }),
  }),
})


export const { useGetOrdersQuery, useGetCustomersQuery, useGetCustomerInfoQuery, useGetOrdersByCustomerQuery } = api