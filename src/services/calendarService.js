import { makeRequest } from './authenticationService';

const API_BASE_URL = 'http://localhost:9000';


export const getDots = (token) => {

    let access_token = token;
    let url = '/api/calendar/dots/fetch?access_token=' + access_token;
    
    return makeRequest('GET', url)
        .then((resp) => {
            return resp;
        })
        .then((json) => {
            return json;
        });   
}

export const getEventDots = (token) => {

    let access_token = token;
    let url = '/api/calendar/dots/event?access_token=' + access_token;
    
    return makeRequest('GET', url)
        .then((resp) => {
            return resp;
        })
        .then((json) => {
            return json;
        });   
}
