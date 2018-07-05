  var map = {};
  $( function() {
    $( "#sort1, #sort2, #sort3" ).sortable({
      connectWith: ".connectedSortable",
      receive: function(evt, ui) {
        map[ui.item[0].id] = evt.target.id;
      }
    }).disableSelection();
  } );