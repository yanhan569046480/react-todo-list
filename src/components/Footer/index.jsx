import React, {Component} from 'react'

export default class Footer extends Component {
    onChange = (event) => {
        const {onToggleCheckAllTodo} = this.props;
        onToggleCheckAllTodo(event.target.checked)
    }

    onDeleteAllDone = () => {
        const {onDeleteAllDone} = this.props;
        onDeleteAllDone()
    }

    render() {
        const {todos} = this.props;

        const doneCount = todos.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0)
        }, 0);
        const total = todos.length;

        return (
            <div>
                <label>
                    <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false}
                           onChange={(event) => {
                               this.onChange(event)
                           }}/>
                </label>
                <span>
                    <span>已完成: {doneCount}</span>/<span>总数统计: {total}</span>
                </span>
                <button onClick={() => {
                    this.onDeleteAllDone()
                }}>清除已完成任务
                </button>
            </div>
        )
    }
}