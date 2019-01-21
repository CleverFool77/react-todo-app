import React from 'react';
import Titem from './item';
import { Component } from 'react';

class Tlist extends Component{

    constructor(props){
        super(props);

        this.state = {
            itemList:[],
        }

    }

    render() {
        return (
        <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
            <Titem datat={this.props.datat}/>
        <button type="button" className="btn btn-danger text-capitalize ml-2">Remove</button>
        </ul>
        )
    }
}
export default Tlist;