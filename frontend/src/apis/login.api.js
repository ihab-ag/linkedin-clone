import { postReq } from "./config/axios.config";

const route="auth/login"

export const loginReq= (data) =>{
   return postReq(route,data);
}