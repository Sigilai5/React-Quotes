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
                {id:1,your_name: "Brian Sigilai", quote: "Always the stairs,never the escalator!", author:"Casey Neistat",upvotes:0,downvotes:0},
                {id:2,your_name: "Doe John", quote: "Am a programming lab rat", author:"Jane Doe",upvotes:0,downvotes:0},
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
         upvotes:0,
         downvotes:0
      });
      this.setState({quotes: newArray});
      this.setState({
          your_name:"",
          quote:"",
          author:"",
      });

    };

    //deletes values
    handleDelete = eventId => {
      const quotes = this.state.quotes.filter(e =>e.id != eventId);
      this.setState({quotes})
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
                                    upvotes={quote.upvotes}
                                    downvotes={quote.downvotes}
                                    onDelete={this.handleDelete}
                                    upVote={this.upVote}
                                />


                            ))}


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

    state = {
        bgColor: "",
        upvotes:this.props.upvotes,
        downvotes:this.props.downvotes

    };


    render() {
        return (
            <React.Fragment>
                <h4>{this.props.your_name}</h4>
                <h6 style={{backgroundColor:this.state.bgColor}}>{this.props.quote}</h6>

                {this.props.author && (
                    <React.Fragment>
                        <i>{this.props.author}</i>
                    </React.Fragment>
                )}

                <MDBContainer>
                <MDBRow>
                    <MDBCol xs="6" className="text-center">
                        ID:{this.props.id}
                    <MDBBtn
                        onClick={() => {
                            this.setState({ bgColor: "yellow" });
                            this.setState({ upvotes: this.state.upvotes + 1 });
                        }}
                        color="primary" outline rounded ><MDBIcon color="primary" icon="thumbs-up" />{this.state.upvotes}</MDBBtn>

                    <MDBBtn
                        onClick={() => {
                            this.setState({ downvotes: this.state.downvotes + 1 });

                        }}
                        rounded outline color="danger"><MDBIcon color="primary" icon="thumbs-down" />{this.state.downvotes}</MDBBtn>


                        <MDBBtn rounded color="danger" onClick={() => this.props.onDelete(this.props.id)}>Delete</MDBBtn>

                    </MDBCol>


                </MDBRow>
                </MDBContainer>


            </React.Fragment>
        )
    }
}





ReactDOM.render(< App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
