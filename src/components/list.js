import React from 'react';
import Titem from './item';

export default class Tlist extends React.Component{
    render() {
        return (
        <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
            <Titem />
        <button type="button" className="btn btn-danger text-capitalize ml-2">Remove</button>
        </ul>
        )
    }
}