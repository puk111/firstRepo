import React from "react";
import SingleTodo from "./SingleTodo";
import classes from "./Todos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function Todos(props) {
  console.log(props);
  return (
    <div className={classes.task__wrapper}>
      <div className={classes.task__goal}>
        <h2>Your Task</h2>

        <FontAwesomeIcon
          icon={faStarHalf}
          className={classes.task__starIcon}
        ></FontAwesomeIcon>

        <p className={classes.task__score}>{props.activeTask}</p>
      </div>
      <ul>
        {props.items.map((item) => (
          <SingleTodo
            key={item.id}
            text={item.text}
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
            onDoneTodo={props.onDoneTodo.bind(null, item.id, item.text)}
          />
        ))}
      </ul>
    </div>
  );
}
