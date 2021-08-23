//client id 7ff44dc0b7e9018
//client secret  4c9136f3fee72c09b2069f27b6e2569231057c23

// https://api.imgur.com/oauth2/authorize?
//client_id=YOUR_CLIENT_ID&
//response_type=REQUESTED_RESPONSE_TYPE
//&state=APPLICATION_STATE

import qs from 'qs';

const CLIENT_ID= '7ff44dc0b7e9018';
const ROOT_URL =  'https://api.imgur.com';

export default {
    login(){
        const queryString ={
            client_id : CLIENT_ID,
            response_type : 'token'
        }

      window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    }
}