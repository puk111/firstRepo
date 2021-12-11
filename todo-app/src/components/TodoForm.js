import React, { useRef } from "react";
import classes from "./TodoForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function TodoForm(props) {
  const userTextRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const userTask = userTextRef.current.value;

    if (userTask.trim().length === 0) {
      //error
      return;
    }

    props.onAddTodo(userTask);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="task" className={classes.form__label}>
        <h1>Todo - React - App</h1>
      </label>
      <div className={classes.control}>
        <input
          type="text"
          id="task"
          placeholder="Create a new Todo"
          ref={userTextRef}
        />
        <button type="submit" className={classes.btn_add}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className={classes.form__addIcon}
          ></FontAwesomeIcon>
        </button>
      </div>
    </form>
  );
}
