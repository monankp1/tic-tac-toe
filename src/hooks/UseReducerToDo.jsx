import React from 'react';
import { useReducer } from 'react';


const initialTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Redux', completed: false },
];

const reducer = (state, action) => {
    switch (action.type) {
        case 'completed':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};


const UseReducerToDo = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: 'completed', id: todo.id });
    };

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.text}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default UseReducerToDo