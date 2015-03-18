(function() {
  $(function() {
    var tabs = document.querySelector('paper-tabs');

    Unquote.dispatcher = new Flux.Dispatcher();
    Unquote.posts = new Unquote.PostsCollection();

    tabs.addEventListener('core-select', function () {
      Unquote.router.navigate(tabs.selected, { trigger: true });
    });

    Unquote.router.on('route', function(route) {
      tabs.selected = route;
    });

    Unquote.posts.fetch();

    Backbone.history.start();
  });
})();
