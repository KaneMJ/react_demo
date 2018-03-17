import React from 'react';

const { Component } = React;

class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date()
        }
    }
    componentWillMount(){
        setInterval(() => this.tick(), 1000);
    }
    tick(){
        this.setState({
            time: new Date()
        });
    }
    render(){
        return (
            <div>
                <h1>The time is: {this.state.time.toLocaleTimeString() }</h1>
            </div>    
        )
    }
}

export default Clock;