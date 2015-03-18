(function() {
  $(function() {
    var tabs = document.querySelector('paper-tabs');

    tabs.addEventListener('core-select', function () {
      window.Unquote.router.navigate(tabs.selected, { trigger: true });
    });

    window.Unquote.router.on('route', function(route) {
      tabs.selected = route;
    });

    Backbone.history.start();
  });
})();
