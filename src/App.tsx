import "./App.css";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList/TodoList";
import HistoryTodoContainer from "./components/HistoryTodoContainer";
import { Switch, Route } from "wouter";

function App() {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route component={HistoryTodoContainer} path={"/historial"} />
        <Route component={TodoList} path={"/"} />
      </Switch>
    </>
  );
}
export default App;
