$(function() {
	
   // band model
   var Band = Backbone.Model.extend();
   
    // a collection of bands
    var BandList = Backbone.Collection.extend({
        model: Band,
        url : 'json/people.json'
    });
    
	
   var BandsView = Backbone.View.extend({
       
      template: _.template($('#bandlist_template').html()),
       
      render: function( eventName ) {
        _.each( this.model.models, function( band ) {
            var lBandName = band.attributes['band_name'];
            var lTemplate = this.template(band.toJSON());
              $( this.el ).append( lTemplate );
            }, this);
            return this;
      }
   });
   
//    BandList instance
    
   var lBands = new BandList;
    
    var AppView = Backbone.View.extend({
          el: "body",

          render: function(){
            var lBandsView = new BandsView({model:lBands});
              
            var lHtml = lBandsView.render().el;
             
            $('#bands').html(lHtml);
          },

          initialize: function(){
            var lOptions = {};
            lOptions.success = this.render;
            lBands.fetch(lOptions);
          }
     });
    
    var App = new AppView;
});
        
    