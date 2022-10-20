import React, { useEffect, useState } from 'react'
import { useJobs } from '../../hooks/query/jobs.query'

export const Job = ({ search }) => {

    const { data, isFetching, refetch } = useJobs(search)

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        if (!isFetching) {
            setJobs([...data['data']])
            console.log(data['data'])
        }
    }, [isFetching])

    useEffect(() => {
        refetch()
    },[search])

    return (
        <>
            {
                jobs?.map((job)=><div className='mt-5 p-5 border-cyan-500 border-2 border-solid rounded-md flex flex-row justify-between w-fit gap-x-5'>
                <p className='text-xl font-sans font-semibold'>{job.desc}</p>
                <button className='p-1 text-white bg-slate-800 rounded-lg h-fit hover:bg-slate-600'>Apply</button>
            </div>)
            }
        </>
    )
}
