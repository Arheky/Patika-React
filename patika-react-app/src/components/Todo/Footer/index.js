function Footer({itemCount, handleStatus, handleClear}) {
  return(
    <footer class="footer">
		  <span class="todo-count">
			  <strong>{itemCount()}</strong>
			  {itemCount() > 1 ? "items": "item"} left
		  </span>
		  <ul class="filters">
			  <li>
				  <a href="#/" onClick={() => handleStatus("all")} class="selected">All</a>
			  </li>
			  <li>
				  <a href="#/" onClick={() => handleStatus("active")}>Active</a>
			  </li>
			  <li>
				  <a href="#/" onClick={() => handleStatus("completed")}>Completed</a>
			  </li>
		  </ul>

		  <button onClick={handleClear} class="clear-completed">
			  Clear completed
		  </button>
	  </footer>
  )
}
export default Footer;