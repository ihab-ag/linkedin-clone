import React from 'react'

export const Job = () => {
  return (
    <div className='mt-5 p-5 border-cyan-500 border-2 border-solid rounded-md flex flex-row justify-between w-fit gap-x-5'>
        <p className='text-xl font-sans font-semibold'>Job offer</p>
        <button className='p-1 text-white bg-slate-800 rounded-lg h-fit hover:bg-slate-600'>Apply</button>
    </div>
  )
}
