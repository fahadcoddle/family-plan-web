import { makeRequest } from './authenticationService';

export const getMe = (request) => {

    let access_token = request.token.token;
    let url = '/api/users/me?access_token=' + access_token;
    
    return makeRequest('GET', url, false, true)
        .then((resp) => {
            console.log('resp', resp);
            return resp;
        })
        .then((json) => {
            return json;
        });   

    
}

