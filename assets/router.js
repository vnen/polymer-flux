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
      Unquote.viewActions.changePage('all');
    },
    favorites: function () {
      Unquote.viewActions.changePage('favorites');
    }
  });

  Unquote.router = new MainRouter();
})();
