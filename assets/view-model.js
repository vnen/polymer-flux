(function () {
  window.Unquote = window.Unquote || {};

  var Unquote = window.Unquote;

  Unquote.ViewModel = Backbone.Model.extend({
    defaults: {
      page: 'all'
    },
    initialize: function () {
      Unquote.dispatcher.register(this.dispatcherCallback.bind(this));
    },
    dispatcherCallback: function (payload) {
      switch (payload.actionType) {
          case 'pageChange': {
            this.set('page', payload.page);
            break;
          }
      }
    }
  });
})();
