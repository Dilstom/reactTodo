import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
    state = {
        todos: [
            { id: 1, content: 'smth1' },
            { id: 2, content: 'smth2' }
        ]
    }

    deleteTodo = id => {
        console.log(id);
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        // this.setState({ todos: todos }) or
        this.setState({ todos })
    }

    render() {
        return (
            <div className="App container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default App;
