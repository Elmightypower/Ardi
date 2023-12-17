// Salut les mecs, soyez prets!! On va construire un tres beau site pour le CMR...
// Rappellez-vous, c'est votre pote Senga, le mignon mec du net 😍
// Alors, vous attendez quoi? Allons-y ! 😎


// gerons l'animation de la barre de navigation
$(".burger").click(() => {
	// l'animation de la nav
	$(".navbar .links-wrapper").toggleClass("active");

	// l'animation du burger
	$(".burger").toggleClass("toggle black");
});

// le changement de l'apparence de la barre de navigation en faisant un scroll
$(window).on("scroll", () => {
	if ($(window).scrollTop()) {
		$(".navbar").addClass("black-navbar");
	} else {
		$(".navbar").removeClass("black-navbar");
	}
});

// paramétrage de owl carousel
$("#owl-header").owlCarousel({
	animateOut: "animate__slideOutDown",
	// animateIn: "animate__flipInX",
	items: 1,
	smartSpeed: 450,
	loop: true,
	nav: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 1500,
	autoplayHoverPause: true,
	mouseDrag: true,
	touchDrag: true,
	slideTransition: "ease-in-out",
});

// gerons la petite animation de scroll de la section des services
// gsap.from(".service-card.first", {
// 	scrollTrigger: {
// 		trigger: "#services",
// 		end: "bottom bottom",
// 		scrub: 1,
// 	},
// 	x: -120,
// 	y: -10,
// 	rotation: -5,
// });

// gsap.from(".service-card.third", {
// 	scrollTrigger: {
// 		trigger: "#services",
// 		end: "bottom bottom",
// 		scrub: 1,
// 	},
// 	x: 120,
// 	y: -10,
// 	rotation: 5,
// });

// parametres de owl carousel - la team
$("#owl-team").owlCarousel({
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		960: {
			items: 3,
		},
		1200: {
			items: 3,
		},
	},
	smartSpeed: 450,
	margin: 30,
	loop: true,
	nav: true,
	dots: true,
	autoplay: false,
	mouseDrag: true,
	touchDrag: true,
	slideTransition: "ease-in-out",
});
