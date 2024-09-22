import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// import TodoList from "./components/todolist"

function App() {

  return (
    <main>
      <section>
        <TodoInput />
        <div className="container">
          <TodoList></TodoList>
        </div>
      </section>
    </main>
  )
}

export default App
