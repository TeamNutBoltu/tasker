angular.module('todoApp', []).controller('TodoListController', function($scope, $http){
	
	var todoList = this;
	
	// Gets the sim details from the user phone.
	todoList.registered_user = function (){
		
		// getting sim numbers form user's phone
		todoList.sims = [ // We have populated the phone numbers manually . we will have to use the device api here.
			'01923316999',
			'01677181006',
			'01534112251'
		];
		
		// Sending the list to the server for cheacking if the user is registered.
		var sim_list_string = '';
		angular.forEach(todoList.sims, function(number){
			sim_list_string += number + '/';
		});
		
		var response = $http.post("../?/get_sim_info/", {'S':todoList.sims});
		response.success(function(data, status, headers, config){
			alert(data.user);
		});
		
		
	}
	
	todoList.sim_one = '01677181006';
	todoList.sim_two = '01534112251';
	
	todoList.sim1 = function(){
		
		var response = $http.get("../?/get_sim_info");
		response.success(function(data, status, headers, config){
			todoList.sim_one = (data.title);
		});
		
		//~ alert("Sim 1 selected");
		 
	};
	
	todoList.sim2 = function(){
		alert("Sim 2 selected");
	};
	
});

//~ angular.module('todoApp', []).controller('TodoListController', function(){
	//~ 
	//~ var todoList = this;
	//~ todoList.todos = [
		//~ {text: 'Angular Basic tutorial.', done: true},
		//~ {text: 'Angular JS Advanced tutorial.', done: false}
	//~ ]
	//~ 
	//~ todoList.addTodo = function (){
		//~ todoList.todos.push({text: todoList.todoText, done: false});
		//~ todoList.todoText = '';
	//~ };
	//~ 
	//~ todoList.remaining = function(){
		//~ var count = 0;
		//~ angular.foreach(todoList.todos, function(todo){
			//~ count += todo.done ? 0 : 1;
		//~ });
		//~ return count;
	//~ };
	//~ 
	//~ todoList.archive = function (){
		//~ var oldTodoList = todoList.todos;
		//~ todolist.todos = [];
		//~ angular.foreach(oldTodoList, function(todo){
			//~ if(!todo.done) todoList.todos.push(todo);
		//~ });
	//~ };
	//~ 
//~ });
