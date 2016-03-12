var MenuView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul>' + 
		  '{{#each models}} <li> {{attributes.name}} {{attributes.category}} </li> {{/each}}' +
		'</ul>'
	),
	
	initialize: function  () {
		this.listenTo( this.collection, "reset", this.render );
	},
	
	render: function () {
		this.$el.html( this.template(this.collection) );
        console.log(this.collection);
		return this;
	}

});