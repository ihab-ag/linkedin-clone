import { getReq } from "./config/axios.config"

const route = 'user/notifications'
const token = localStorage.getItem('token')

export const getNotificationsReq = () => {
    return getReq(route, token)
}