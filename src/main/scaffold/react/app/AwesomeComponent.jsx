import React from 'react';

class AwesomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount : 0, reactMessage: '', reactMessageDisplayed: false};
        this.getReactMessage = this.getReactMessage.bind(this);
    }

    getReactMessage () {
        let thisComponent = this;
        $.post('react/react').done(function(data) {
            thisComponent.setState({reactMessage: data, reactMessageDisplayed: true});
        });
    }

    render() {
        return (
            <div>
                Welcome to the Reactjs App
                <div><button onClick={this.getReactMessage}>Send</button></div>
                <h1 style={this.state.reactMessageDisplayed ? {display: 'block'} : {display: 'none'}}>{this.state.reactMessage}</h1>
            </div>
        );
    }

}

export default AwesomeComponent;