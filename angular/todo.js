angular.module('todoApp', []).controller('TodoListController', function(){
	
	var todoList = this;
	todoList.todos = [
		{text: 'Angular Basic tutorial.', done: true},
		{text: 'Angular JS Advanced tutorial.', done: false}
	]
	
	todoList.addTodo = function (){
		todoList.todos.push({text: todoList.todoText, done: false});
		todoList.todoText = '';
	};
	
	todoList.remaining = function(){
		var count = 0;
		angular.foreach(todoList.todos, function(todo){
			count += todo.done ? 0 : 1;
		});
		return count;
	};
	
	todoList.archive = function (){
		var oldTodoList = todoList.todos;
		todolist.todos = [];
		angular.foreach(oldTodoList, function(todo){
			if(!todo.done) todoList.todos.push(todo);
		});
	};
	
});
