import { ChangeEvent, useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { trashOutline, checkmarkOutline, closeOutline } from "ionicons/icons";
import "./TodoList.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TodoList() {
  const todoInLocalStorage = () => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  };

  const historyInLocalStorage = () => {
    const data = localStorage.getItem("todosHistory");
    return data ? JSON.parse(data) : [];
  };

  const [todoList, setTodoList] =
    useState<{ text: string; completed: boolean }[]>(todoInLocalStorage);
  const [value, setValue] = useState("");

  const handleTodoValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [historyTodo, setHistoryTodo] = useState<
    { text: string; completed: boolean }[]
  >(historyInLocalStorage);

  const notify = (message: string, type: "success" | "error") => {
    if (type === "success") {
      toast.success(message, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === "error") {
      toast.error(message, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const addTodo = (todo: string) => {
    const repetido = todoList.some(
      (t) => t.text.toUpperCase() === todo.toUpperCase()
    );
    if (todo === "") {
      notify("¡Campo incompleto, por favor completelo!", "error");
    } else if (repetido) {
      notify("¡La tarea ya existe!", "error");
    } else {
      const newTodo = { text: value, completed: false };
      setTodoList((prevTodos) => [...prevTodos, newTodo]);
      setValue("");
      notify("¡Tarea agregada exitosamente!", "success");
    }
  };

  const removeTodo = (todo: string) => {
    const todoindex = todoList.findIndex((t) => t.text === todo);
    let todoObject = todoList[todoindex];
    setHistoryTodo((prevTodo) => [...prevTodo, todoObject]);
    const newTodo = todoList.filter((t) => t.text !== todo);
    setTodoList(newTodo);
    notify("¡Tarea eliminada!", "error");
  };

  const handleCompleteTodo = (todoText: string) => {
    const indexTodo = todoList.findIndex((todo) => todo.text === todoText);
    const updatedTodoList = [...todoList];
    updatedTodoList[indexTodo] = {
      ...updatedTodoList[indexTodo],
      completed: !updatedTodoList[indexTodo].completed,
    };
    setTodoList(updatedTodoList);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  console.log(todoList);

  useEffect(() => {
    localStorage.setItem("todosHistory", JSON.stringify(historyTodo));
  }, [historyTodo]);

  return (
    <section className="container">
      <h2>Ingresa las tareas para no olvidarte</h2>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Agregar Todo"
          value={value}
          onChange={handleTodoValue}
        />
        <label htmlFor="floatingInput">Ingresa la Tarea</label>
        <button className="btn btn-primary" onClick={() => addTodo(value)}>
          Agregar
        </button>
      </div>
      <section className="todosContainer">
        {todoList.map((todo) => (
          <article
            key={todo.text}
            className={`todoContainer ${todo.completed ? "complete" : ""}`}
          >
            <p>{todo.text}</p>
            <button className="btnContainer">
              <IonIcon
                icon={trashOutline}
                onClick={() => removeTodo(todo.text)}
              />
              <IonIcon
                icon={todo.completed ? closeOutline : checkmarkOutline}
                onClick={() => handleCompleteTodo(todo.text)}
              />
            </button>
          </article>
        ))}
      </section>
      <ToastContainer />
    </section>
  );
}
