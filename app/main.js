angular.module('todoApp', []).controller('TodoListController', function(){
	
	todoList = this;
	
	// Initializing the app with some basic data.
	todoList.todos = [
		
		{text: 'James Walker Bond', done: false},
		{text: 'Marshall Ayeb', done:false}
		
	];
	
	// Adding todos
	todoList.addTodo = function(){
		todoList.todos.push({text: todoList.todoText, done: false});
		todoList.todoText = '';
	};
	
	// Archiving todos
	todoList.archive = function(){
		oldTodos = todoList.todos;
		todoList.todos = [];
		angular.forEach(oldTodos, function(todo){
			if(!todo.done) todoList.todos.push(todo);
		});
	};
	
	// Counting the remaining todos
	todoList.remaining = function(){
		var count = 0;
		angular.forEach(todoList.todos, function(todo){
			count += !todo.done ? 1 : 0;
		});
		return count;
	};
	
});
