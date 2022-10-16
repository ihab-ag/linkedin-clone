import axios from "axios";

const base_url="http://127.0.0.1:8000/api/";

export const postReq = async (route,data,token=null) =>{
    try{
        return await axios.post(base_url+route,data,{
            headers: {
            'Authorization': 'Bearer ' + token
          }});
    }catch(error) {
        return error;
    }
}
