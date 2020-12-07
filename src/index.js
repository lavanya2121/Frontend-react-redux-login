import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'


const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})
console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
