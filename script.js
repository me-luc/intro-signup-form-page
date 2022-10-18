function highlight(button) {
	const previousHighlight = document.querySelector(".highlight");

	if (previousHighlight !== null) {
		previousHighlight.classList.remove("highlight");
	}

	button.classList.add("highlight");
}
