import { useState } from 'react'
import { Mission } from '../../types/mission'
import styles from './todoForm.module.css'
import { MissionsFormProps } from '../../types/missionsFormProps'

const TodoForm: React.FC<MissionsFormProps> = ({ addMission }) => {
    const [newTodo, setNewTodo] = useState<Mission>({  _id: "", name: "", status: 0, priority: 0, description: "" });
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (!newTodo == null) {
        return;
      }
      addMission(newTodo);
      setNewTodo( { _id: "", name: "", status: 0, priority: 0, description: "" });
    };
    return (
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
          placeholder="enter mission name"
        />
        <select
          className={styles.select}
          value={newTodo.status}
          onChange={(e) => setNewTodo({ ...newTodo, status: parseInt(e.target.value) })}
        >
          <option value="Pending">Pending</option>
          <option value="InProgress">InProgress</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          className={styles.select}
          value={newTodo.priority}
          onChange={(e) => setNewTodo({ ...newTodo, priority: parseInt(e.target.value) })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="text"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          placeholder="enter mission description"
        />
        <button type="submit">Add Mission</button>
      </form>
    );
  };
  
  export default TodoForm;
  