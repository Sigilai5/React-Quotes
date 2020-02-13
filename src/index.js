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



    //Handles input ands sets value to the current state

    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
           [inputName]: nextValue
        });
        console.log(this.state)
    };


    //adds item to state
    addEvent = () => {
      var newArray = [...this.state.quotes];
      newArray.push({
         id:newArray.length ? newArray[newArray.length - 1].id + 1 :1,
         your_name:this.state.your_name,
         quote:this.state.quote,
         author:this.state.author,
      });
      this.setState({quotes: newArray});
      this.setState({
          your_name:"",
          quote:"",
          author:"",
      });

    };

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
                                name="your_name"
                                label="Your Name"
                                icon="user"
                                hint="John Doe"
                                group type="text"
                                getValue={this.handleInputChange("your_name")}

                            />

                            <MDBInput
                                name="quote"
                                label="Quote"
                                icon="edit"
                                hint="Give me Liberty!"
                                group type="text"
                                getValue={this.handleInputChange("quote")}
                            />

                            <MDBInput
                                name="author"
                                label="Author (optional)"
                                icon="user-tie"
                                group
                                type="text"
                                getValue={this.handleInputChange("author")}

                            />


                        </form>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <MDBBtn
                            color="info"
                            onClick={() => {
                                this.toggleModal();
                                this.addEvent();
                            }}
                        >
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
