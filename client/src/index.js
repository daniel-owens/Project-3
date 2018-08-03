import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import Nav from "./Nav";

var destination = document.querySelector("#root");

ReactDOM.render(
	<div>
			<Nav />
			<TodoList />	
	</div>,
	destination
)