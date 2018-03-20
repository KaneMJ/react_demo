import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Button from './button';
import Box from './box';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            box: 'teal'
        };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
        this.setState({
            box: 'blue'
        });
    }
    render(){
        return(
            <div className="container">
                <h1 className="text-center my-3">Components Demo</h1>
                <Button updateColor={this.changeColor}/>
                <Box color={this.state.box}/>
            </div>
        );
    }
}
export default App;
