$(document).ready(function() {

  // cache `.full` for later reference
  var fullDiv = $('.overlay a');
  // bind all `.previews` anchor tags with a click event handler
  $('.overlay a').on('click', function(e) {

    //prevent default action
    e.preventDefault();

    // cache the item being clicked for later reference
    var clickedThumb = $(this);

    // create an image element in the DOM
    var $img = $('<img>').attr('src', clickedThumb.data('.thumb'));

    // remove `selected` class from all anchors using `clickedThumb` and traversing upwards
    clickedThumb.parent().find('a').removeClass('selected');

    // add class `selected` to the item being clicked
    clickedThumb.addClass('selected');

    // empty the `.full` div and `append` our newly created `$img`
    fullDiv.append($img.hide().fadeIn('slow'));
  });

  // add delegated-event `click` to `.full` div
    // open a `fancybox` using the contained image
    $(fullDiv).fancybox({
            prevEffect    : 'none',
            nextEffect    : 'none',
            closeBtn      : false,
            helpers   : {
            title : { type : 'inside' },
            }
          });

});