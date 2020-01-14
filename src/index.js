// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const person = [1,2,3]
const person2 = [7,8,9]


const new2 = [ ...person,'at' , ...person2] 

console.log(new2)


class Person{

    constructor(name){this.name=name}
walk(){
    console.log("hello")
}

}