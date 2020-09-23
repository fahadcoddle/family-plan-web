import { makeRequest } from './authenticationService';


export const getCoParents = (request) => {
    
    let url = '/api/coparents/fetch';
    
    return makeRequest('GET', url)
        .then((resp) => {
            return resp;
        })
        .then((json) => {
            return json;
        });
}


