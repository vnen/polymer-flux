(function () {
  window.Unquote = window.Unquote || {};

  var Unquote = window.Unquote;

  var PostModel = Backbone.Model.extend({
    defaults: {
      uid: 0,
      text: "Nothing.",
      username: "Nobody",
      avatar : "images/avatar-01.svg",
      favorite: false
    },
    idAttribute: 'uid'
  });

  Unquote.PostsCollection = Backbone.Collection.extend({
    model: PostModel,
    url: 'api/posts.json',
    initialize: function () {
      Unquote.dispatcher.register(this.dispatchCallback.bind(this));
    },
    dispatchCallback: function (payload) {
      switch (payload.actionType) {
          case 'postFavorite': {
            var post = this.findWhere({ uid: payload.post });
            if (post) {
              post.set('favorite', !post.get('favorite'));
            }
          }
      }
    }
  });
})();
