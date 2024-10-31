import { useState, useEffect } from 'react'
import { Mission } from '../../types/mission'
import { getMissions } from '../../services/apiServer'
import styles from './todoApp.module.css'
import TodoForm from '../todoForm/todoForm'
const TodoApp = () => {
    const [missions, setMissions] = useState<Mission[]>([])
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const loadMissions = async () => {
        try {
            const getAllmission = await getMissions();
            setMissions(getAllmission);
            
        } catch (error) {
            setError('Failed to load missions');
        }
    };
    loadMissions();
}, []);

const toggleCompletion = async (id: string): Promise<void> => {
    try {
      const singleTodo: Mission | undefined = missions.find((mission) => mission._id === id);
      if (!singleTodo) {
        throw new Error("cant find todo with this id");
      }
      await axios.put<Todo>(`${BASE_URL}/${id}`, {
        ...singleTodo,
        completed: !singleTodo.completed,
      });
      getTodo();
    } catch (error) {
      console.error("cant toogle todo", error);
    }
  };
    useEffect(() => {
        
    })
  return (
      
  
    <div className={styles.container}>
        <header className={styles.header}>
            <h1 color="black">Military Oparations Dashborad</h1>
        </header>
        <div className={styles.todoForm}>
            <TodoForm addMission={(mission: Mission) => setMissions([...missions, mission])}/>      
        </div>
        </div>
       
        
           
            
       
      
   
  )
}


export default TodoApp
