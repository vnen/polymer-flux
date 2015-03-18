(function () {
  window.Unquote = window.Unquote || {};

  var Unquote = window.Unquote;

  Unquote.viewActions = {
    changePage: function (page) {
      Unquote.dispatcher.dispatch({
        actionType: 'pageChange',
        page: page
      });
    }
  };
})();
