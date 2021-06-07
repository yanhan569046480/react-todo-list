import React, {Component} from 'react'

export default class Item extends Component {

    state = {mouseEnter: false}

    onMouse = (flag) => {
        this.setState({mouseEnter: flag})
    }

    onChange = (id, event) => {
        const {onChangeTodo} = this.props;

        onChangeTodo(id, event.target.checked);
    }

    onDelete = (id) => {
        const {onDeleteTodo} = this.props;

        onDeleteTodo(id);
    }

    render() {
        const {id, name, done} = this.props;
        const {mouseEnter} = this.state;

        return (
            <li style={{backgroundcolor: mouseEnter ? '#ddd' : '#fff'}}
                onMouseEnter={() => {
                    this.onMouse(true)
                }}
                onMouseLeave={() => {
                    this.onMouse(false)
                }}>
                <label>
                    <input type="checkbox"
                           onChange={(event) => {
                               this.onChange(id, event)
                           }} checked={done}></input>
                    <span>{name}</span>
                </label>
                <button style={{display: mouseEnter ? 'block' : 'none'}} onClick={() => {
                    this.onDelete(id)
                }}>删除
                </button>
            </li>
        )
    }
}