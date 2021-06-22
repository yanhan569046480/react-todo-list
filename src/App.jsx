import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
    state = {
        todos: [
            {id: '001', name: '任务1', done: false},
            {id: '002', name: '任务2', done: false},
            {id: '003', name: '任务3', done: false},
        ]
    }

    onAddTodo = (todoObj) => {
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }

    onDeleteTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return todo.id !== id
        })
        this.setState({todos: newTodos})
    }

    onChangeTodo = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, done}
            } else {
                return todo;
            }
        })
        this.setState({todos: newTodos})
    }

    onToggleCheckAllTodo = (flag) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            return {...todo, done: flag}
        })
        this.setState({todos: newTodos})
    }

    onDeleteAllDone = (flag) => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return !todo.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state;

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header onAddTodo={this.onAddTodo}/>
                    <List todos={todos} onDeleteTodo={this.onDeleteTodo}
                          onChangeTodo={this.onChangeTodo}></List>
                    <Footer todos={todos} onToggleCheckAllTodo={this.onToggleCheckAllTodo} onDeleteAllDone={this.onDeleteAllDone}/>
                </div>
            </div>
        )
    }
}