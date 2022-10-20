import axios from "axios";

const base_url="http://127.0.0.1:8000/";

export const postReq = async (route,data,token=null) =>{
    try{
        return await axios.post(base_url+route,data,{
            headers: {
            'Authorization': 'Bearer ' + `${token}`
          }});
    }catch(error) {
        return error;
    }
}

export const putReq = async (route,data,token=null) =>{
    try{
        return await axios.put(base_url+route,data,{
            headers: {
            'Authorization': 'Bearer ' + `${token}`
          }});
    }catch(error) {
        return error;
    }
}

export const getReq = (route,token=null) =>{
    try{
         return axios.get(base_url+route,{
            headers: {
            'Authorization': 'Bearer ' + `${token}`
          }});
    }catch(error) {
        return error;
    }
}