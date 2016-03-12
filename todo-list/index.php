<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
   <!-- ========= -->
  <!-- Your HTML -->
  <!-- ========= -->
  <div class="wrapper">
      <h1>To do List</h1>
      <section id="todoapp">
          <header id="header">
              <h1>Todos</h1>
              <input type="text" id="new-todp" placeholder="What needs to be done?">
          </header>
          <section id="main">
              <ul id="todo-list"></ul>
          </section>
      </section>
      <div id="container">Loading..........</div>
      
  </div>
   
    <!-- ========= -->
    <!-- Libraries -->
    <!-- ========= -->
    <script src="lib/jquery-1.11.3.js" type="text/javascript"></script>
    <script src="lib/underscore.js" type="text/javascript"></script>
    <script src="lib/backbone.js" type="text/javascript" ></script> 
    <script src="lib/backbone.localStorage.js" type="text/javascript"></script>  
    <script src="lib/handlebars-v4.0.5.js" type="text/javascript"></script>
    
    
     <!-- =============== -->
     <!-- Javascript code -->
     <!-- =============== -->
    <script type="text/javascript">
//        Backbone's views
      /* -------------Step 1;--------------------*/
//        var Appview = Backbone.View.extend({
            
             //el - stands for element. Every view has a element associate in  with html
            // content will be rendered.
//            el: '#container',
//            init : function(){
//                this.render();
//            },
          //   $el - it is a cached jquery object (el). in which you can use jquery function 
           //  to push content . like the hello world in this case.
            
//            render : function() {
//                this.$el.html("Hello world");
//            }
//            
//            
//        });
//        var appView = new Appview();
        
        
        
/*- ------------       step 2 --------------*/
        var AppView = Backbone.View.extend({
            el : $('#container'),
            template: _.template("<h2> hello <%= who %></h3>"),
            initialize : function(){
                this.render();
            },
            render : function() {
                // render thd function using substituting  the variable 'who' for 'world!'.
                this.$el.html( this.template( {who : "world!"}));
            }
        });
        var appView = new AppView();
         
      
        /*------- step 3 ------------*/
        
        
        
        
//        var AppView = Backbone.View.extend({
//      // el - stands for element. Every view has a element associate in with HTML content will be rendered.
//      el: '#container',
//      // It's the first function called when this view it's instantiated.
//      initialize: function(){
//        this.render();
//      },
//      // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content. Like the Hello World in this case.
//      render: function(){
//        this.$el.html("Hello World");
//      }
//    });
//
//    var appView = new AppView();
    
    </script>
</body>
</html>