var MenuItems = Backbone.Collection.extend({
	comparator: 'name',
	model: MenuItem,
	url: 'data/menu-items.json'
});