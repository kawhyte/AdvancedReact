import React, { Component } from 'react';
import Counter from './counter'


class  Counters extends Component {
    state = { counters:[

        {id:10, value:10},
        {id:2, value:100},
        {id:3, value:2},
        {id:4, value:1},
        {id:5, value:0}
    ] }
    render() { 
        return (<div>
            <h1>Counters</h1>
            {this.state.counters.map(counter => <Counter key = {counter.id} value ={counter.value} id ={counter.id} >

           
            </Counter>)}
            </div>  
             
            );
    }
}
 
export default Counters;