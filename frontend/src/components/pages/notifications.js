import React from 'react'
import { applyJobReq } from '../../apis/apply-job.api'
import { useNotifications } from '../../hooks/query/notifications.query'

export const Notifications = () => {

    const { data: jobs, isFetching } = useNotifications()
    
    const apply = async (id) => {
        const data = {
            "job_id": id
        }
        const req = await applyJobReq(data)
        console.log(req)
    }
    
    return (
        <>
            {
                !isFetching && jobs?.data[0].jobs.map((job,key)=><div key={key} className='mt-5 p-5 border-cyan-500 border-2 border-solid rounded-md flex flex-row justify-between w-fit gap-x-5'>
                <p className='text-xl font-sans font-semibold'>{job.desc}</p>
                <button className='p-1 text-white bg-slate-800 rounded-lg h-fit hover:bg-slate-600' onClick={() => apply(job._id)}>Apply</button>
            </div>)
            }
        </>
    )
}
