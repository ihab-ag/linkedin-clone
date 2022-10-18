import { putReq } from "./config/axios.config"

const route = 'user'
const token =localStorage.getItem('token')

export const updateUserReq = (data) => {
    return putReq(route,data,token)
}