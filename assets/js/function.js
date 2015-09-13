// $(document).ready(function(){
// 	$("#owl-example").owlCarousel({
// 		default: 1,
// 		items: 1,
// 		singleItem: true,
// 		autoPlay: 1000
// 	})
// });



$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

