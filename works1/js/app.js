$(function() {
    var AppView = Backbone.View.extend({
      // el - stands for element. Every view has a element associate in with HTML
      //      content will be rendered.
      el: '#container',
      // It's the first function called when this view it's instantiated.
      initialize: function(){
        this.render();
      },
      // $el - it's a cached jQuery object (el), in which you can use jQuery functions
      //       to push content. Like the Hello World in this case.
      render: function(){
        this.$el.html("Hello World");
      }
    });
    var appView = new AppView();
    
});

//example second
$(function(){
  var AppView = Backbone.View.extend({
      el: $('#container1'),
      // template 
      template: _.template("<h3>Hello <%= who %><h3>"),
      initialize: function(){
        this.render();
      },
      render: function(){
        this.$el.html(this.template({
            who: 'world!'
        }));
      }
    });

    var appView = new AppView();
});

//Backbone.Model
$(function(){
    
   var app = {}; // create namespace for our app

    app.Todo = Backbone.Model.extend({
      defaults: {
        title: '',
        completed: false
      }
    });
   var todo = new app.Todo({title: 'Learn Backbone.js', completed: false});
    todo.get('title'); // "Learn Backbone.js" 
todo.get('completed'); // false
todo.get('created_at'); // undefined
todo.set('created_at', Date());
todo.get('created_at'); // "Wed Sep 12 2012 12:51:17 GMT-0400 (EDT)"
});


//Backbone.Collection
$(function(){
	var app = {};
	app.Todo = Backbone.View.extend({
		defaults: {
			title: '',
			completed: false
		}
	});
	var todo = new app.Todo({ title: 'Learn Backbone.js', completed: false});
	app.TodoList = Backbone.Collection.extend({
	model: app.Todo,
		localStorage: new Store("Backbone-todo")
	
});
	// instance of the collection
	app.todoList = new app.TodoList();
	
});

//Example of a Backbone.View
var AppView = Backbone.View.extend({
	el: '#container',
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html("hello world");
	}
});

//Todo View;
$(function() {
	// renders individual todo items list ( li )
	var app = {};
	var app = new Object();
	app.TodoView = Backbone.View.extend({
		tagName: 'li',
		template: _.template($('#item-template').html()),
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;// enable chained calls
		}
	});
})

//on Event
Object.on(evetn, callback, [context]);
e.g. TodoList.on('add',this.addAll, this);

var obj = {},
	callback = function(msg) {
		console.log( "Triggered" + msg); };
_.extend(obj, Backbone.Events);
obj.on( "my_event", callback);
obj.trigger("my_event", "my custom event");

	}

//Tood View
// Renders the full list of todo items calling todoview for each one
	
	app.AppView = Backbone.View.extend({
		el: '#todoapp',
		initialize: function() {
			this.input =  this.$('#new-todo');
			// when new element are added to the collection render then with addone
			app.todoList.on( 'add', this.addOne, this);
			app.todoList.on('reset', this.addAll, this);
			app.todoList.fetch();// loads list from local storage
			
		},
		events: {
			'keypress #new-todo': 'createtodoOnEnter'
		},
		createTodoOnEnter: function(e) {
			if( e.which !== 13 || !this.input.val().trim()){
				return
			}
			app.todoList.create( this.newAttributes());
			this.input.val('');// clean input box
		},
		addOne : function( todo ) {
			var view = new app.TodoView({ 'model: todo'});
			$('#todo-list').append(view.render().el);
		},
		 addAll: function(){
        this.$('#todo-list').html(''); // clean the todo list
        app.todoList.each(this.addOne, this);
      },
      newAttributes: function(){
        return {
          title: this.input.val().trim(),
          completed: false
        }
      }
    });

    //--------------
    // Initializers
    //--------------   

    app.appView = new app.AppView();