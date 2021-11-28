// paroller initialisation starts here
$(document).ready(function() {
	$('.paroller').paroller();
	
});
// paroller initialisation starts here

$(document).ready(function(){
	// home page 1 portfolio carousel initialisation starts here
		$('.blog-carousel-container').owlCarousel({
			center:true,
			loop:true,
			setTimeout: 1000,
			margin: 100,
			autoplay: true,
			autoplayTimeout: 3000,
			responsive:{
				100:{
					items:1,
					nav:false
				},
				600:{
					items:1,
					nav:false
				},
				1000:{
					items:1,
					nav:false,
				}
			}
		});

		$('.pages-carousel').owlCarousel({
			center:false,
			loop:true,
			setTimeout: 1000,
			margin: 15,
			dots: true,
			responsive:{
				100:{
					items:2,
					nav:false
				},
				600:{
					items:3,
					nav:false
				},
				1000:{
					items:4,
					nav:false,
				}
			}
		});
});

