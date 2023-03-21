import React from 'react'
import Coin from '../src/assets/coin.png'
import { useGetCustomerInfoQuery, useGetOrdersByCustomerQuery } from './services/api';

const Card2 = ({customerId, name}) => {

  const { data, isLoading, isSuccess } = useGetOrdersByCustomerQuery(customerId);
  
  let totalPoints = 0; 

  
 

  let total = 0;
  if (isSuccess) {
    data.map(items => {
      if (items.amount < 50) {
        totalPoints += 0;
      } else if(items.amount >= 50 && items.amount < 100) {
        totalPoints += items.amount - 50;
      } else if(items.amount > 100) {
        totalPoints += 50 + (items.amount - 100) * 2;
      }
    });
  }

  return (
    <div className='flex justify-between px-8 py-6 rounded gap-2 w-1/3 bg-slate-200'>
      <div className='flex flex-col'>
        <h2 className='font-bold'>{name}</h2>
        <p className='flex text-xs text-green-700'>Total points earned: {totalPoints}</p>
      </div>
      {/* <div className='flex flex-col items-end'> */}
        {/* <h2 className='text-gray-600 text-sm'>{name}</h2> */}
        {/* <p  className='text-gray-600 text-sm'></p> */}
      {/* </div> */}
    </div>
  )
}

export default Card2
