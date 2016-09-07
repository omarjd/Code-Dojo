function validateForm() {
	var name = document.form1.name.value;
	if (name === null || name === "") {
		alert("The name cannot be blank");
		return false;
	}

	var email = document.form1.email.value;
	if (email === null || email === "") {
		alert("The email cannot be blank");
		return false;
	}
	if (email.lastIndexOf(".") <= 0) {
		alert ("Email must have a .");
		return false;
	}

	if (email.indexOf("@") <= 0) {
		alert("Email must contain an @");
		return false;
	}
	if (email.lastIndexOf(".") <= email.indexOf("@") + 1) {
		alert ("Email . must be after @ + character");
		return false;
	}
}
