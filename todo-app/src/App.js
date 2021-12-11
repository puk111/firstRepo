import { useState } from "react";
import "./App.css";
import DoneTodos from "./components/DoneTodos";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const addTodoHandler = (userTask) => {
    console.log(userTask);

    setTodos((prev) => {
      return prev.concat({
        id: new Date().toISOString(),
        text: userTask,
      });
    });
  };

  const removeHandler = (todoId) => {
    setTodos((prev) => {
      return prev.filter((todo) => todoId !== todo.id);
    });
  };

  const doneHandler = (todoId, todoText) => {
    setDoneTodos((prev) => {
      return prev.concat({
        id: todoId,
        text: todoText,
      });
    });
    setTodos((prev) => {
      return prev.filter((todo) => todoId !== todo.id);
    });
  };

  let taskCounter = todos.length;
  let doneCounter = doneTodos.length;

  return (
    <div className="App">
      <TodoForm onAddTodo={addTodoHandler} />
      <Todos
        items={todos}
        onRemoveTodo={removeHandler}
        onDoneTodo={doneHandler}
        activeTask={taskCounter}
      />
      <DoneTodos items={doneTodos} doneTask={doneCounter} />
    </div>
  );
}

export default App;
