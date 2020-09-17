import { makeRequest } from './authenticationService';

export const getDots = () => {

    let url = '/api/calendar/dots/fetch';
    
    return makeRequest('GET', url)
        .then((resp) => {
            return resp;
        })
        .then((json) => {
            return json;
        });   
}

export const getEventDots = () => {

    let url = '/api/calendar/dots/event';
    
    return makeRequest('GET', url)
        .then((resp) => {
            return resp;
        })
        .then((json) => {
            return json;
        });   
}
