import React from "react";
import "./TodoItem.css";
import {Mission} from "../../types/mission";
import {MissionItemProps} from "../../types/missionItemProps";
import styles from "./todoItem.module.css";
const TodoItem: React.FC<MissionItemProps> = ({
  mission,
  deleteTodo,
  toggleCompletion,
}) => {
  return (

    <li className={styles.todoItem}>
      <div className={styles.todoStatus} onClick={()=>toggleCompletion(mission._id)}>
        {mission.status} === 0 ? {"red" } }
       
          
      </div>
      <button onClick={()=>deleteTodo(mission._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
