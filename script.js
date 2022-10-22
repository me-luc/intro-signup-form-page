function highlight(button) {
	const previousHighlight = document.querySelector(".highlight");

	if (previousHighlight !== null) {
		previousHighlight.classList.remove("highlight");
	}

	button.classList.add("highlight");

	const sibling = button.nextSibling;
	alert(sibling);
	if (button.innerHTML.length > 0 && !sibling.classList.contains("hide")) {
		alert("hi");
	}
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
		parent.children[2].innerHTML = "Name shouldn't be empty";
	}
	//check if last name is empty
	if (lastName.value === "") {
		error = true;
		lastName.id = "error";
		lastName.placeholder = "";
		const parent = lastName.parentNode;
		parent.children[1].classList.remove("hide");
		parent.children[2].classList.remove("hide");
		parent.children[2].innerHTML = "Last name shouldn't be empty";
	}
	//check if email name is empty or is an actual email
	if (email.value === "") {
		error = true;
		email.id = "error";
		email.placeholder = "";
		const parent = email.parentNode;
		parent.children[1].classList.remove("hide");
		parent.children[2].classList.remove("hide");
		parent.children[2].innerHTML = "E-mail shouldn't be empty";
	}
	//check if email name is empty or is an actual email
	if (email.value.includes("@")) {
		error = true;
		email.id = "error";
		email.placeholder = "";
		const parent = email.parentNode;
		parent.children[1].classList.remove("hide");
		parent.children[2].classList.remove("hide");
		parent.children[2].innerHTML = "Doesn't look like an e-mail";
	}
	//check if password name is empty
	if (password.value === "") {
		error = true;
		password.id = "error";
		password.placeholder = "";
		const parent = password.parentNode;
		parent.children[1].classList.remove("hide");
		parent.children[2].classList.remove("hide");
		parent.children[2].innerHTML = "Password shouldn't be empty";
	}
	//or is less than 8 characters
	else if (password.value.length < 8) {
		error = true;
		password.id = "error";
		password.placeholder = "";
		const parent = password.parentNode;
		parent.children[1].classList.remove("hide");
		parent.children[2].classList.remove("hide");
		parent.children[2].innerHTML =
			"Password should have at least 8 characters";
	}
	//if it's all ok then claim
	if (error) {
	}
}
