import { makeRequest } from './authenticationService';

export const getChildren = (request) => {

    let url = '/api/members/fetch';

    return makeRequest('GET', url)
        .then((resp) => {
            return resp;
        })
        .then((json) => {
            return json;
        });

}