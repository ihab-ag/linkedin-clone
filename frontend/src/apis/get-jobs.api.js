import { getReq } from "./config/axios.config"

const route = 'user/jobs?search='
const token = localStorage.getItem('token')

export const getJobsReq = (search) => {
    return getReq(route, token)
}