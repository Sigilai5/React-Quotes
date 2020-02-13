import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import * as serviceWorker from './serviceWorker';
import {MDBBtn,MDBContainer,MDBRow,MDBCol} from "mdbreact";
import {render} from "@testing-library/react";


class App extends Component {
    render(){
        return(
            <React.Fragment>

                <MDBContainer>

                    <MDBRow>

                        <MDBCol md="6">
                            left
                        </MDBCol>

                        <MDBCol md="6">
                            right
                        </MDBCol>

                    </MDBRow>

                </MDBContainer>

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
