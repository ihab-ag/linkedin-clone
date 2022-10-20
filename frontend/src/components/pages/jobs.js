import React, { useEffect, useState } from 'react'
import { useJobs } from '../../hooks/query/jobs.query'
import { Job } from '../ui/job'

export const Jobs = () => {
    const [search, setSearch] = useState('')
    const { data, isFetching, refetch } = useJobs(search)

    useEffect(() => {

        if (!isFetching) {
            console.log(data)
        }

    }, [isFetching,search])
    return (
        <>
            <form>
                <h3 className=" text-lg font-bold ">Search</h3>
                <input type="text" class="border-solid border-cyan-600 border-2 rounded-md " value={search} onChange={(e) => { setSearch(e.target.value); refetch()}} />
            </form>
            <Job />
        </>
    )
}
