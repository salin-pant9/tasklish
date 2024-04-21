'use client'
import { addPayment } from '@/slices/paymentSlice';
import { RootState } from '@/store';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const Page = () => {
    const searchParams = useSearchParams();
    const pidx = searchParams.getAll('pidx');
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        const response = axios.post('https://a.khalti.com/api/v2/epayment/lookup/',{
            pidx: `${pidx}`
        },{

            headers:{
                Authorization:'key 952aea4319784b9abe0a5cd478ebbbb6 ',
            }
        }).then(res => {
            // console.log(res);
            dispatch(addPayment(res.data.status));
            router.push('/')
        });
    },[pidx])
  return (
    <div></div>
  )
}

export default Page