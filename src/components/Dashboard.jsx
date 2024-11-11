import React from 'react'
import Charts from './Charts'

const Dashboar = () => {
  return (
    <div>
        <div className='flex flex-col py-10 px-14'>
            <h2>Dashboard</h2>
        </div>
        <div className='flex space-x-8 px-14'>
            <div className='flex flex-col border border-gray-300 p-5 space-y-2 h-[150px] w-[400px]'>
                <span>Vijayakumar</span>
                <span className='text-gray-400'>Your Balance Rs.20000</span>
            </div>
            <div className='flex flex-col border border-gray-300 p-5 space-y-2 h-[150px] w-[400px]'>
                <span>Vijayakumar</span>
                <span className='text-gray-400'>Your Expenses Rs.20000</span>
            </div>
        </div>

        <div className='flex flex-col py-14 px-14'>
            <h2>Expenses Chart</h2>
            <Charts/>
        </div>
        <div className='flex space-x-8 px-14'>
            <div className='flex flex-col border border-gray-300 p-5 space-y-2 h-[150px] w-[400px]'>
                <span>Your Activity</span>
                <span className='text-gray-400'>I spend Rs 10000 for Education</span>
            </div>
            <div className='flex flex-col border border-gray-300 p-5 space-y-2 h-[150px] w-[400px]'>
                <span>Pending Bills</span>
                <span className='text-gray-400'>Pending Bill Rs 700</span>
            </div>
        </div>
    </div>
  )
}

export default Dashboar