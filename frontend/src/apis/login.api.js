import { postReq } from "./config/axios.config";

const route="auth/login"

export const login= (data) =>{
   return postReq(route,data);
}