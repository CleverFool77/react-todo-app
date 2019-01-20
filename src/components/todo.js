import React from 'react';

export default class Todo extends React.Component{
    render() {
        return <div className="bbox">
        <form>
            <div className="list-text">
            </div>
            <input type="text" className="form=control" placeholder="add a todo item"/>
            <button type="submit" className="btn btn-primary ml-2">Add</button>
        </form>
        </div>
    }
}