import { useEffect, useState } from "react";
import styles from './TodoListPage.module.css';
import { MdDeleteOutline } from "react-icons/md";

const TodoItem = (props) => {
    const { menuActive, todo, reload, setReload, deleteTodo } = props;
    const [teste, setTeste] = useState(todo.checked);

    function handleCheckbox(event) {
        setTeste(event.target.checked);
        todo.checked = event.target.checked;

        setReload(!reload);
    }

    useEffect(() => { }, [teste, todo.checked]);

    return (
        <>
            <div className={styles.todoContainer}>
                <div className={styles.todo}>
                    <input
                        type="checkbox"
                        name="checkbox"
                        id={todo.id}
                        className={styles.checkbox}
                        onChange={handleCheckbox}
                        checked={todo.checked}
                    />

                    <label htmlFor={todo.id} className={styles.label}>
                        {todo.text}
                    </label>
                </div>

                {
                    menuActive === "completed" ? (<MdDeleteOutline className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />) : null
                }
            </div>
        </>
    )
}

export default TodoItem