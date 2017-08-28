/////
var log = function(txt) {
  $("div#log").append("<p>" + (typeof txt === 'string' ? txt : JSON.stringify(txt)) + "</p>");

var C = Backbone.Collection.extend({

  model: Backbone.Model,

  pagination: function(perPage, page) {
    page = page - 1;
    var collection = this;
    collection = _(collection.rest(perPage * page));
    collection = _(collection.first(perPage));
    return collection.map(function(model) {
      return model.toJSON()
    });
  }
});

var c = new C([{
  name: 'one'
}, {
  name: 'three'
}, {
  name: 'four'
}, {
  name: 'two'
}, {
  name: 'five'
}, {
  name: 'six'
}, {
  name: 'seven'
}]);

log("page 1");
log(c.pagination(3, 1));
log("page 2");
log(c.pagination(3, 2));
log("page 3");
log(c.pagination(3, 3));
console.log("done oh");
}