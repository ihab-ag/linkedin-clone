import { getReq } from "./config/axios.config"

const route = 'user'
const token = localStorage.getItem('token')

export const getUserReq = (data) => {
    return getReq(route, data, token)
}