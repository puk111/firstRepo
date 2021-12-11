import React from "react";
import classes from "./DoneTodos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function DoneTodos(props) {
  return (
    <div className={classes.done__task__wrapper}>
      <div className={classes.done__task__goal}>
        <h2>Completed Task</h2>

        <FontAwesomeIcon
          icon={faStar}
          className={classes.done__task__starIcon}
        ></FontAwesomeIcon>

        <p className={classes.done__task__score}>{props.doneTask}</p>
      </div>

      <ul>
        {props.items.map((item) => (
          <li key={item.id} className={classes.item__done}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
