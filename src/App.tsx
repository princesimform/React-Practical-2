import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <div className='App'>
      <Layout>
        <Header /> {/* Statelass Component */}
        <TodoList />
        <AddTodo />
      </Layout>
    </div>
  );
}

export default App;
