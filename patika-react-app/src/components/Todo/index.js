import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialState = [
	{todo: "Learn React", done: false},
	{todo: "Have a Life", done: false},
	{todo: "Learn Javascript", done: true}
]
function Todo() {
  const [todo, setTodo] = useState(initialState)

	const handleComplete = i => {
		const mapped = todo.map((item, index) => index === i ? {...item, done: !item.done} : {...item})
		setTodo(mapped)
	}

	const handleCompleteCount = () => {
		return todo.filter(item => item.done === false).length
	}

	const [status, setStatus] = useState("all")

	const handleStatus = (type) => {
		if (type === "active"){
			setStatus("active")
		}else if (type === "completed"){
			setStatus("completed")
		}else{
			setStatus("all")
		}
	}

	const handleClear = () => {
		const clear = todo.filter(item => item.done !== true)
		setTodo(clear)
	}

	const removeItem = i => {
		const clear = todo.filter((item, idx) => idx !== i)
		setTodo(clear)
	}
  return(
    <div className="App">
      <section class="todoapp">
        <Header setTodo={setTodo} />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>
          <Main todoList={todo} handleComplete={handleComplete} status={status} removeItem={removeItem} />
        </section>
        <Footer itemCount={handleCompleteCount} handleStatus={handleStatus} handleClear={handleClear} />
      </section>
      <footer class="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  )
}

export default Todo;

