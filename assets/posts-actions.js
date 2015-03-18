(function() {
  window.Unquote = window.Unquote || {};

  var Unquote = window.Unquote;

  Unquote.postActions = {
    favorite: function (post) {
      Unquote.dispatcher.dispatch({
        actionType: 'postFavorite',
        post: post
      });
    }
  };
})();
