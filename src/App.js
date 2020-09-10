import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'store/configureStore';

import Container from 'container/App';
import { addLocationQuery } from 'helpers/routeParams';

const history = createBrowserHistory();

addLocationQuery(history);

history.listen((location) => {
    addLocationQuery(history);
});

export const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Container history={history} />
        </Provider>
    );
}

export default App;
