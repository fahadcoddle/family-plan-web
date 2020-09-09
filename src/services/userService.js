import { makeRequest } from './authenticationService';

const API_BASE_URL = 'http://localhost:9000';


export const getMe = (request) => {

    let access_token = request.token.token;
    let url = '/api/users/me?access_token=' + access_token;
    
    return makeRequest('GET', url, false, true)
        .then((resp) => {
            // console.log('resp', resp);
            return resp;
        })
        .then((json) => {
            return json;
        });   

    
}

