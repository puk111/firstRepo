import React from "react";
import classes from "./SingleTodo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function SingleTodo(props) {
  return (
    <div className={classes.item__wrapper}>
      <li className={classes.item__el}>{props.text}</li>
      <button onClick={props.onRemoveTodo} className={classes.btn}>
        <FontAwesomeIcon
          icon={faTimesCircle}
          className={classes.remove__icon}
        ></FontAwesomeIcon>
      </button>
      <button onClick={props.onDoneTodo} className={classes.btn}>
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={classes.success__icon}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}
