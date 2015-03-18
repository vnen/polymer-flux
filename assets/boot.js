(function() {
  $(function() {
    var tabs = document.querySelector('paper-tabs');

    tabs.addEventListener('core-select', function () {
      window.Unquote.router.navigate(tabs.selected, { trigger: true });
    });

    Backbone.history.start();
  });
})();
