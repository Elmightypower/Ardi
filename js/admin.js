// handling the burger animation
$(".bars").click(() => {
	$(".bars").toggleClass("active");

	$(".admin-links").toggleClass("active");
});

$(".admin-links .links .link").click(function () {
	// handling the admin links
	$(".admin-links .links .link").removeClass("active");
	$(this).addClass("active");

	// handling the admin sections
	if ($(this).hasClass("home")) {
		$(".admin-content .admin-section").removeClass("active");
		$(".admin-content .admin-section.home").addClass("active");
	} else if ($(this).hasClass("profile")) {
		$(".admin-content .admin-section").removeClass("active");
		$(".admin-content .admin-section.profile").addClass("active");
	} else if ($(this).hasClass("pharmacy")) {
		$(".admin-content .admin-section").removeClass("active");
		$(".admin-content .admin-section.pharmacy").addClass("active");
	} else if ($(this).hasClass("rdv")) {
		$(".admin-content .admin-section").removeClass("active");
		$(".admin-content .admin-section.rdv").addClass("active");
	} else if ($(this).hasClass("files")) {
		$(".admin-content .admin-section").removeClass("active");
		$(".admin-content .admin-section.files").addClass("active");
	} else if ($(this).hasClass("patient")) {
		$(".admin-content .admin-section").removeClass("active");
		$(".admin-content .admin-section.patient").addClass("active");
	}
});

// all activities
$("p.all-activities").click(() => {
	$(".admin-content .admin-section").removeClass("active");
	$(".admin-content .admin-section.all-activities-section").addClass("active");
});

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const todayDate = String(date.getDate()).padStart(2, "0");
const todayPattern = year + "/" + month + "/" + todayDate;
alert(todayPattern)

$('#date-picker').attr('value', todayPattern)

$(".heart").click(() => {
	$(".heart").toggleClass("liked");
});

// handling the notification pop-up
// setTimeout(() => {
// 	$(".notification.opened").addClass("closed");
// }, 10000);

$(".link.logout").click(() => {
	$(".notification").removeClass("closed");
	$(".notification").addClass("opened");
});

$(".notification .cross").click(() => {
	$(".notification").removeClass("opened");
	$(".notification").addClass("closed");
});

$(".notification button.btn-admin").click(() => {
	$(".notification").removeClass("opened");
	$(".notification").addClass("closed");
});
