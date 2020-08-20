import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import configureStore from './store/configureStore';

import Container from './container/App';
import { addLocationQuery } from "./helpers/routeParams";

const history = createBrowserHistory();

addLocationQuery(history);

history.listen(location => {
  addLocationQuery(history);
});


const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    );
}

export default App;
