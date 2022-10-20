import { postReq } from "./config/axios.config";

const route="user/job"
const token= localStorage.getItem('token')

export const loginReq= (data) =>{
   return postReq(route,data,token);
}