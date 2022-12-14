import { useQuery } from "@tanstack/react-query"
import { getJobsReq } from "../../apis/get-jobs.api"


export const JOBS_KEY = ["JOBS_KEY"]

export const useJobs = (search) => useQuery({

    refetchOnWindowFocus: false,
    queryKey: JOBS_KEY,
    queryFn: () => getJobsReq(search),
    staleTime: Infinity
})
