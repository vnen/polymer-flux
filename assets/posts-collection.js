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

  var PostsCollection = Backbone.Collection.extend({
    model: PostModel,
    url: 'api/posts.json'
  });

  Unquote.posts = new PostsCollection();
})();
