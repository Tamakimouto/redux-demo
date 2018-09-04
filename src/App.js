import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import Demo from './demo';

class App extends React.Component {

    render() {

        /* This creates your state, I think of it like a box of things I might need later */
        const store = createStore(reducers);

        /* Provider here lets the rest of the app get to the box
         * You won't see the store referenced directly, this is just what Components connect to.
         **/
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">here be a redux demo</h1>
                </header>
                <Provider store={store}>
                    <Demo />
                </Provider>
            </div>
        );
    }
}

export default App;
