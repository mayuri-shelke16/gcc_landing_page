$(document).ready(function () {
	// tabs

	$(".nav-item").on('click', function () {
		$(".nav-item").removeClass("is-active");
		$(this).addClass("is-active");
	})


	$('.menu-toggle').click(function () {
		$(".nav").toggleClass("mobile-nav");
		$("body").toggleClass("nav-on");
		$(this).toggleClass("is-active");
	});



	$('#best-seller-carousel').owlCarousel({
		loop: true,
		dots: false,
		margin: 20,
		nav: true,
		items: 2.8,
		responsive: {
			0: {
				items: 1
			},

			768: {
				items: 1
			},

			991: {
				items: 2.8
			},

			// 1400: {
			// 	items:3 
			// }
		}

	})
	
	



	// tabs
	
    $(".h-tab_content").hide();
    $(".h-tab_content:first").show();

    $(".h-tab_tab-head li").click(function() {
		$(".v-tab_tab-head li:first-child").addClass("active");
		$(".v-tab_container .v-tab_content:first-child").addClass("active");
      $(".h-tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
      $(".h-tab_tab-head li").removeClass("active");
      $(this).addClass("active"); 
  
    });


    $(".v-tab_content").hide(); 
    $(".v-tab_content:first").show();

    $(".v-tab_tab-head li").click(function() {
		$(".v-tab_container .v-tab_content:first-child").removeClass("active");
      $(".v-tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
      $(".v-tab_tab-head li").removeClass("active");
      $(this).addClass("active");

	  
    });

	
	




})