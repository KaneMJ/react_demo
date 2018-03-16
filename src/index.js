import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const user = {
    firstName: "Billy",
    lastName: "Bob"
}

const greeting = <h1>This is an ok greeting to {takeMeNow(user)}</h1>

function takeMeNow(user){
    return `${user.firstName} ${user.lastName}`
}

ReactDOM.render(
    greeting,
    document.getElementById('root')
);



