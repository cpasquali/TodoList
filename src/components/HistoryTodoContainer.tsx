import { useEffect, useState } from "react";
import "./HistoryTodoContainer.css";
import "react-toastify/dist/ReactToastify.css";

export default function HistoryTodoContainer() {
  const [countCompleted, setCountCompleted] = useState(0);
  const [countIncompleted, setCountIncompleted] = useState(0);

  const countTodos = () => {
    const completed = historyTodos.filter((t) => t.completed).length;
    const incompleted = historyTodos.length - completed;
    setCountCompleted(completed);
    setCountIncompleted(incompleted);
  };

  const getHistoryTodo = () => {
    const data = localStorage.getItem("todosHistory");
    return data ? JSON.parse(data) : [];
  };

  const [historyTodos, sethistoryTodos] =
    useState<{ text: string; completed: boolean }[]>(getHistoryTodo);
  console.log(historyTodos);

  const deleteHistory = () => {
    sethistoryTodos([]);
  };

  useEffect(() => {
    localStorage.setItem("todosHistory", JSON.stringify(historyTodos));
    countTodos();
  }, [historyTodos]);

  return (
    <section className="historyContainer">
      <h2>Historial de Tareas</h2>
      {historyTodos.length !== 0 ? (
        <>
          <button
            className="btn btn-primary deleteHistory"
            onClick={deleteHistory}
          >
            Eliminar todos los registros
          </button>
          <section className="container2">
            {historyTodos.map((todo, index) => (
              <article
                key={index}
                className={`todoContainer ${
                  todo.completed ? "complete" : "incomplete"
                }`}
              >
                <p>{todo.text}</p>
              </article>
            ))}
          </section>
          <h4>
            Tareas Completadas: {countCompleted} (
            {Math.floor((countCompleted * 100) / historyTodos.length)}
            %)
          </h4>
          <h4>
            Tareas Incompletas: {countIncompleted} (
            {Math.floor((countIncompleted * 100) / historyTodos.length)}
            %)
          </h4>
        </>
      ) : (
        <h2>Sin registros Existentes</h2>
      )}
    </section>
  );
}
