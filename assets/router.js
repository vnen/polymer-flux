(function () {
  window.Unquote = window.Unquote || {};

  var Unquote = window.Unquote;

  var MainRouter = Backbone.Router.extend({
    initialize: function () {
      this.route('', 'all');
      this.route('all', 'all');
      this.route('favorites', 'favorites');
    },
    all: function () {
      console.log('all action');
    },
    favorites: function () {
      console.log('fav action');
    }
  });

  Unquote.router = new MainRouter();
})();
