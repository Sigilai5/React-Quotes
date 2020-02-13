import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import * as serviceWorker from './serviceWorker';
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import {render} from "@testing-library/react";






class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal:false,
            quotes:[
                {id:1,your_name: "Alex James", quote: "Give all you got!", author:"Jayme",up:0,down:0},
                {id:2,your_name: "Alex James", quote: "Give all you got!", author:"Jayme",up:0,down:0},
            ]
        };
    }

    toggleModal = () => {
        this.setState({
           modal: !this.state.modal
        });
    };


    render(){
        return(
            <React.Fragment>

                <MDBContainer>

                    <MDBRow>

                        <MDBCol md="3">
                            <MDBBtn color="primary" onClick={this.toggleModal}>
                                <MDBIcon icon="magic" className="mr-1" /> Add Quote
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="9">
                            <h3 className="text-uppercase my-3">Quotes</h3>
                            {this.state.quotes.map(quote => (
                                <Quote
                                    key={quote.id}
                                    id={quote.id}
                                    your_name={quote.your_name}
                                    quote={quote.quote}
                                    author={quote.author}
                                    upvotes={quote.up}
                                    downvotes={quote.down}
                                    onDelete=""
                                />


                            ))};


                        </MDBCol>

                    </MDBRow>

                </MDBContainer>

                <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <MDBModalHeader
                        className="text-center"
                        titleClass="w-100 font-weight-bold"
                        toggle={this.toggleModal}
                    >
                        New Quote
                    </MDBModalHeader>
                    <MDBModalBody>
                        <form className="mx-3 grey-text">
                            <MDBInput
                                name="time"
                                label="Time"
                                icon="clock"
                                hint="12:30"
                                group type="text"

                            />

                            <MDBInput
                                name="title"
                                label="Title"
                                icon="edit"
                                hint="Briefing"
                                group type="text"

                            />

                            <MDBInput
                                name="location"
                                label="Location (optional)"
                                icon="map"
                                group
                                type="text"

                            />

                            <MDBInput
                                name="description"
                                label="Description (optional)"
                                icon="sticky-note"
                                group
                                type="textarea"

                            />

                        </form>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <MDBBtn >
                            Add
                        </MDBBtn>

                    </MDBModalFooter>
                </MDBModal>


            </React.Fragment>
        )
    }
};


class Quote extends Component{

    render() {
        return (
            <React.Fragment>
                <h4>{this.props.your_name}</h4>
                <h6>{this.props.quote}</h6>
                <i>{this.props.author}</i>

                <MDBRow>

                    <MDBCol xs="6"><MDBCol xs="6"><MDBIcon color="primary" icon="thumbs-up" /></MDBCol></MDBCol>
                    <MDBCol xs="6"><MDBIcon color="primary" icon="thumbs-down" /></MDBCol>
                </MDBRow>



            </React.Fragment>
        )
    }
}





ReactDOM.render(< App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
