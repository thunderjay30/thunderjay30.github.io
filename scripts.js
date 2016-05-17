  var $menuBtn = $('.menuBtn');
var $menu = $('.menuContainer');

  $menuBtn.on('click', function() {
    $menu.fadeToggle(300);
  });