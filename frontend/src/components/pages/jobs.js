import React, { useState } from 'react'

export const Jobs = () => {
    const [search,setSearch] = useState('')

  return (
    <form>
        <h3 className=" text-lg font-bold ">Search</h3>
        <input type="text" class="border-solid border-cyan-600 border-2 rounded-md " value={search} onChange={(e) => setSearch(e.target.value)} />
        
    </form>
  )
}
