(function () {
  window.Unquote = window.Unquote || {};

  var Unquote = window.Unquote;

  var MainRouter = Backbone.Router.extend({
    initialize: function () {
      this.route('', 'allAction');
      this.route('all', 'allAction');
      this.route('favorites', 'favAction');
    },
    allAction: function () {
      console.log('all action');
    },
    favAction: function () {
      console.log('fav action');
    }
  });

  Unquote.router = new MainRouter();
})();
