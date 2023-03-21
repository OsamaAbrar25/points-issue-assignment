import React from 'react'
import { useGetCustomersQuery, useGetOrdersQuery } from './services/api';
import Card from './Card'
import Card2 from './Card2';

const Home = () => {

  const {data, isLoading, isSuccess} = useGetOrdersQuery();
  const {data: cdata, isLoading: isCLoading, isSuccess: isCSuccess} = useGetCustomersQuery();
  console.log(data);
  let totalAmount = 0;

  if (isSuccess) {
    data.map(items => totalAmount += parseInt(items.amount, 10));
    console.log(totalAmount);
  }

  return (
    <div className='flex flex-col h-screen w-screen pt-48 gap-2'>
      <h1 className='flex font-bold text-base justify-center'>TOTAL POINTS ISSUED</h1>
      <p className='flex text-4xl font-normal justify-center'><strong>{totalAmount}&nbsp;</strong>points</p>
      <h2 className='flex justify-center mt-12 mb-6'>POINTS ISSUED HISTORY</h2>
      {isSuccess && data.map(items => 
        <div className='flex justify-center'><Card customerId={items.customerId} amount={items.amount} timestamp={items.timestamp} /></div>
      )}
      <h1 className='flex justify-center mt-12 mb-6'>CUSTOMERS INFO</h1>
      {isCSuccess && cdata.map(items => 
      <div className='flex justify-center'><Card2 customerId={items.id} name={items.name}/></div>
      )}
    </div>
  )
}

export default Home
