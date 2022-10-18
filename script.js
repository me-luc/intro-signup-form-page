function highlight(button) {
	const previousHighlight = document.querySelector(".highlight");

	if (previousHighlight !== null) {
		previousHighlight.classList.remove("highlight");
	}

	button.classList.add("highlight");
}

function claim() {
	const firstName = document.querySelector(".first-name").value;
	const lastName = document.querySelector(".last-name");
	const email = document.querySelector(".email");
	const password = document.querySelector(".password");

	//check if first name is empty
	if (firstName === "") {
		firstName.id = "error";
		alert("hi");
	} /*
	//check if last name is empty
	else if () {

	}
	//check if email name is empty or is an actual email
	else if () {

	}
	//check if password name is empty  
	else if () {

	} 
	//or is less than 8 characters
	else if ( ) {

	}
	//if it's all ok then claim
	else {

	}*/
}
