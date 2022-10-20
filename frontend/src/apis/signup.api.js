import { postReq } from "./config/axios.config";

const route="auth/signup"

export const signupReq= (data) =>{
   return postReq(route,data);
}