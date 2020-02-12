import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {render} from "@testing-library/react";


class App extends Component {
    render(){
        return(
            <React.Fragment>
                <h1>Quotes</h1>
            <Quote />
            </React.Fragment>
        )
    }
};


class Quote extends Component{

    render() {
        return (
            <div>
                <p>Jobs</p>
            </div>
        )
    }
}





ReactDOM.render(< App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
