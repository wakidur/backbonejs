$(function() {
    
    // MODEL MODEL MODEL
    // MODEL MODEL MODEL

    var Person = Backbone.Model;

    // COLLECTION COLLECTION COLLECTION
    // COLLECTION COLLECTION COLLECTION

    var PersonCollection = Backbone.Collection.extend({
      model: Person,
      url: './json/people.json',
      parse: function (response) {
        return response
}
    });

    // VIEWS VIEWS VIEWS
    // VIEWS VIEWS VIEWS

    var About = Backbone.View.extend ({
      el: '.page',
      render: function () {
        var that = this;
        var people = new PersonCollection();
        people.fetch({
          success: function ( PersonCollection ) {
            var template = _.template($('#people-template').html(), {
                PersonCollection: PersonCollection.models
            });
            that.$el.html(template);
          }
        })
      }
    });  


    var About = new About ();

    // ROUTES ROUTES ROUTES
    // ROUTES ROUTES ROUTES    

    var Router = Backbone.Router.extend({
      routes: {
        '': 'home'
      }
    });

    var router = new Router();
    router.on('route:home', function () {
      About.render();
    });

    Backbone.history.start();
})