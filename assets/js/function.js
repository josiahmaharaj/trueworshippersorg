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
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,

      autoPlay : true,
      stopOnHover : true,

      baseClass : "owl-carousel",
      theme : "owl-theme",

      lazyload: true,

      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: 100,

 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

