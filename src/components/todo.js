import React from 'react';
import { Component } from 'react';

class Todo extends Component{

    constructor(props){
        super(props);

        this.state={
            val:'',
            valarray:[],
        };

        this.changevalue = this.changevalue.bind(this);
        this.btnclick = this.btnclick.bind(this);
    }
    changevalue(e){
        this.setState({val:e.target.value});
        console.log(e.target.value);
    }

    btnclick(e){
        let temparray=this.state.valarray;
        temparray.push(this.state.val);
        this.setState({valarray:temparray});
        this.props.functransfer(temparray)
    }

    render() {


        return <div className="bbox">
            <div className="list-text">
            </div>
            <input type="text" className="form=control" placeholder="add a todo item"
            value={this.state.val} onChange={this.changevalue}/>
        <button onClick={this.btnclick} className="btn btn-primary btn-block ml-2 mt-3">Add</button>
        </div>
    }
}
export default Todo;