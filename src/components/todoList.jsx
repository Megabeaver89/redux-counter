import { useSelector } from 'react-redux';
import TodoItem from './todoItem';
import { todos } from '../constants/todos';


const TodoList = () => {
    // const todos = useSelector(state => state.todos.todos);


    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            ))}
        </ul>
    );
};

export default TodoList;