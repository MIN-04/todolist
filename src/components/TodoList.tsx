import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}: any) => {
    return (
        <div className="TodoList">
            {todos.map((todo: any) => (
                <TodoListItem todo={todo} 
                    key={todo.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default TodoList;