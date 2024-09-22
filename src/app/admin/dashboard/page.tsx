"use client"

import Footer from '@/components/front-end/Footer';
import Navbar from '@/components/front-end/Navbar';
import { setloading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

export interface IProduct {
    _id: string,
    imgSrc: string,
    fileKey: string,
    name: string,
    price: string,
    category: string,
}

const Dashboard = () => {

 const [products,setProducts] = useState([]);
 const [openPopup,setopenPopup] = useState(false);
 const [updateTable,setupdateTable] = useState(false);

 const dispatch = useAppDispatch()

 useEffect(() => {
 dispatch (setloading(true));

 axios
 .get("/api/get_products")
 .then((res) => setProducts(res.data))
 .catch(err => console.log(err))
 .finally(() => dispatch(setloading(false)));
} , [updateTable])


  return (
    <div>
      {/* <div className='bg-white h-[calc(100vh-96)] rounded-lg p-4'>
        <h2 className='text-3xl'>All product</h2>

        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto'>
          <table className='w-full '>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>SR No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Picture</th>
                <th>Action</th>
              </tr>
            </thead>
            </table>

        </div>

      </div> */}
      <Navbar />
<br />

      <BlogList />
   
      <Footer />
    </div>
  )
}

export default Dashboard

