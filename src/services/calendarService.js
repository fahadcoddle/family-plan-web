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

export const getSchedule = (params) => {
    const {type, view, start_date, end_date} = params;

    let url = '/api/calendar/schedule';

    if(params){
        url += '?';
        if(params.type) {
           url += `&type=${type}`;
        }
        if(params.view) {
            url += `&view=${view}`;
        }
        if(params.start_date && params.end_date){
            url += `&start_date=${start_date}&end_date=${end_date}`;
        }
    }

    return makeRequest('GET', url)
        .then((resp) => {
            return resp;
        })
        .then((json) => {
            return json;
        });
}
