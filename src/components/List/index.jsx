import React, {Component} from 'react'
import Item from '../Item'

export default class List extends Component {
    render() {
        const {todos, onDeleteTodo, onChangeTodo} = this.props;

        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} onChangeTodo={onChangeTodo}/>
                    })
                }
            </ul>
        )
    }
}
