import React from 'react';
import { Component } from 'react';

class Titem extends Component{

    constructor(props){
        super(props);
        console.log(this.props)
        this.state={
            // itemarray:[],
        }
    }

    render() {
        return (
            
            <div>
            {
                this.props.datat.map((data,index)=>(
                    <li className="list-group-item text-capitalize 
                    d-flex justify-content-between my-2" key={index}>
                    {data}
                    </li>
                ))
            }
            </div>
        
            
        )
    }
}
export default Titem;