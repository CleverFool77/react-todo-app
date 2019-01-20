import React from 'react';

export default class Todo extends React.Component{
    render() {

        const{itemname,handleChange,handleSubmit}= this.props;

        return <div className="bbox">
        <form onSubmit={handleSubmit}>
            <div className="list-text">
            </div>
            <input type="text" className="form=control" placeholder="add a todo item"
            value={itemname} onChange={handleChange}/>
            
        </form>
        <button type="submit" className="btn btn-primary btn-block ml-2 mt-3">Add</button>
        </div>
    }
}