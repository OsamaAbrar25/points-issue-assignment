import React from 'react'
import Coin from '../src/assets/coin.png'
import { useGetCustomerInfoQuery } from './services/api';

const Card = ({customerId, amount, timestamp}) => {

  const { data, isLoading, isSuccess } = useGetCustomerInfoQuery(customerId);
  
  let points = 0; 

  if (amount < 50) {
    points = 0;
  } else if(amount >= 50 && amount < 100) {
    points = amount - 50;
  } else if(amount > 100) {
    points = 50 + (amount - 100) * 2;
  }

  return (
    <div className='flex justify-between px-8 py-6 rounded gap-2 w-1/3 bg-slate-200'>
      <div className='flex flex-col'>
        <h2 className='font-bold'>${amount} spent</h2>
        <p className='flex text-xs text-green-700 gap-1'><img src={Coin} width="15px"></img>+{points} points issued</p>
      </div>
      <div className='flex flex-col items-end'>
        <h2 className='text-gray-600 text-sm'>{isSuccess && data.name}</h2>
        <p  className='text-gray-600 text-sm'>{timestamp}</p>
      </div>
    </div>
  )
}

export default Card
