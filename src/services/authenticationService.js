const API_BASE_URL = 'http://localhost:9000';

export const registerUserService = (request) => {
    const REGISTER_API_ENDPOINT = 'http://localhost:3000/api/v1/register';

    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request.user),
    };

    return fetch(REGISTER_API_ENDPOINT, parameters)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return json;
        });
};

export const loginUserService = (request) => {
    const LOGIN_API_ENDPOINT = 'http://localhost:3000/api/v1/login';

    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request.user),
    };

    /*return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });*/

    const credentials = {
        email: request.user.email,
        pwd: request.user.password,
    };

    return makeRequest('POST', '/auth/login', credentials)
        .then((response) => {
            return response;
        })
        .then((json) => {
            return json;
        });
};

export const makeRequest = (method, url, body, withoutAuthorization) => {
    const request_ulr = API_BASE_URL + url;
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Version: '6.0',
    };
    const access_token = '';

    if (access_token && !withoutAuthorization) {
        headers.authorization = 'Bearer ' + access_token;
    }
    const options = { method, headers };
    if (body) {
        options.body = JSON.stringify(body);
    }
    return fetch(request_ulr, options).then((response) => {
        return response.text().then((text) => {
            return text ? JSON.parse(text) : {};
        });
    });
};
