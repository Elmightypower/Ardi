const inputs = document.querySelectorAll(".input");

function focusHandling() {
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurHandling() {
	let parent = this.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", focusHandling);
	input.addEventListener("blur", blurHandling);
});
