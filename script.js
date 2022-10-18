function highlight(button) {
	const previousHighlight = document.querySelector(".highlight");

	if (previousHighlight !== null) {
		previousHighlight.classList.remove("highlight");
	}

	button.classList.add("highlight");
}

function claim() {
	const firstName = document.querySelector(".first-name");
	const lastName = document.querySelector(".last-name");
	const email = document.querySelector(".email");
	const password = document.querySelector(".password");

	let error = false;

	//check if first name is empty
	if (firstName.value === "") {
		error = true;
		firstName.id = "error";
		firstName.placeholder = "";
		const parent = firstName.parentNode;
		parent.children[1].classList.remove("hide");
		parent.children[2].classList.remove("hide");
	}
	//check if last name is empty
	if (lastName.value === "") {
		error = true;
		lastName.id = "error";
		lastName.placeholder = "";
		const parent = lastName.parentNode;
		parent.children[1].classList.remove("hide");
		parent.children[2].classList.remove("hide");
	}
	//check if email name is empty or is an actual email
	if (email.value === "") {
		error = true;
		email.id = "error";
		email.placeholder = "";
		const parent = email.parentNode;
		parent.children[1].classList.remove("hide");
		parent.children[2].classList.remove("hide");
	}
	//check if password name is empty
	if (password.value === "") {
		error = true;
		password.id = "error";
		password.placeholder = "";
		const parent = password.parentNode;
		parent.children[1].classList.remove("hide");
		parent.children[2].classList.remove("hide");
	}
	//or is less than 8 characters
	else if (password.value.length < 8) {
	}
	//if it's all ok then claim
	if (error) {
	}
}
