import React, {Component} from 'react'
import {nanoid} from 'nanoid'
import './index.css';

export default class Header extends Component {
    onKeyUp = (event) => {
        const {onAddTodo} = this.props;

        if (event.keyCode !== 13) {
            return
        }
        if (!event.target.value) {
            alert('不能为空！')
            return;
        }
        const todoObj = {id: nanoid(), name: event.target.value, done: false}
        onAddTodo(todoObj)
        event.target.value = ''
    }

    render() {
        return (
            <div className="header-container">
                <input onKeyUp={(event) => {
                    this.onKeyUp(event)
                }} type="text" placeholder="请输入任务名称，按回车键确认添加"></input>
            </div>
        )
    }
}