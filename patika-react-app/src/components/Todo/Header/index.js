import React, { useState } from 'react';

function Header({setTodo}) {
	const [input, setInput] = useState();

	const handleChange = (e) => {
		setInput(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		setTodo(((prevState) => 
			[...prevState, {todo: input, done: false}]
		))
	}
  return(
		<div>
    	<header class="header">
		  	<h1>todos</h1>
		  	<form onSubmit={handleSubmit}>
			  	<input class="new-todo" onChange={handleChange} placeholder="What needs to be done?" autoFocus />
		  	</form>
	  	</header>
		</div>
  )
}

export default Header;