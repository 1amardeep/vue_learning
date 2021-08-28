//client id 7ff44dc0b7e9018
//client secret  4c9136f3fee72c09b2069f27b6e2569231057c23

// https://api.imgur.com/oauth2/authorize?
//client_id=YOUR_CLIENT_ID&
//response_type=REQUESTED_RESPONSE_TYPE
//&state=APPLICATION_STATE

import qs from 'qs';
import axios from 'axios';

const CLIENT_ID= '7ff44dc0b7e9018';
const ROOT_URL =  'https://api.imgur.com';

export default {
    login(){
        const queryString ={
            client_id : CLIENT_ID,
            response_type : 'token'
        }

      window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },
    fetchImages(token){
      return axios.get(`${ROOT_URL}/3/account/me/images`,{
          headers:{
              Authorization: `Bearer ${token}`
          }
      })
    },
    uploadImages(images,token){
        console.log("*************");
        const promises = Array.from(images).map(image=>{
            const formData = new FormData();
            formData.append('image',image);
            return axios.post(`${ROOT_URL}/3/image.json`,formData,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
        })

       return  Promise.all(promises);
    }
}