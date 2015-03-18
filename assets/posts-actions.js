(function() {
  window.Unquote = window.Unquote || {};

  var Unquote = window.Unquote;

  Unquote.postActions = {
    favorite: function (postId) {
      Unquote.dispatcher.dispatch({
        actionType: 'postFavorite',
        post: postId
      });
    }
  };
})();
