function togglePasswordVisibility(inputId) {
	var input = document.getElementById(inputId);
	var img = document.querySelector(`#${inputId} + img`); // Find the corresponding image for the input

	// Toggle between 'password' and 'text' type
	if (input.type === "password") {
		input.type = "text"; // Show password
		img.src = "view_off.png"; // Change image to indicate the password is visible (you can replace 'view_off.png' with another image if you'd like)
	} else {
		input.type = "password"; // Hide password
		img.src = "view.png"; // Change image back to show the 'eye' icon
	}
}
function congrat() {
	// Get the values of the name, family name, and gender fields
	var name = document.getElementById("name").value;
	var familyName = document.getElementById("family-name").value;
	var genderMale = document.getElementById("male").checked;
	var genderFemale = document.getElementById("female").checked;

	// Check if the form is completely filled
	if (name && familyName && (genderMale || genderFemale)) {
		// Determine the prefix based on the selected gender
		var prefix = genderMale ? "Mr." : "Ms.";

		// Show the congratulatory alert
		alert(
			"Congratulations, " +
				prefix +
				" " +
				name +
				" " +
				familyName +
				"!\nYour form has been received by the company."
		);
		return true; // Allow form submission
	}
}
function checkPasswordStrength() {
	const password = document.getElementById("password").value;
	const message = document.getElementById("password-message1");
	let strength = 0;

	// Criteria for password strength
	const lengthCriteria = password.length >= 8;
	const uppercaseCriteria = /[A-Z]/.test(password);
	const numberCriteria = /\d/.test(password);
	const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

	// Evaluate strength
	if (lengthCriteria) strength++;
	if (uppercaseCriteria) strength++;
	if (numberCriteria) strength++;
	if (specialCharCriteria) strength++;

	// Update the message based on strength
	if (strength === 0) {
		message.textContent = "Enter a password to check its strength.";
		message.style.color = "white";
	} else if (strength === 1) {
		message.textContent = "Weak password. Add at least 8 characters,";
		message.style.color = "red";
	} else if (strength === 2) {
		message.textContent =
			"Fair password. Try adding uppercase letters or special symbols.";
		message.style.color = "orange";
	} else if (strength === 3) {
		message.textContent =
			"Strong password. Add special characters to make it  stronger.";
		message.style.color = "yellow";
	} else if (strength === 4) {
		message.textContent = "Very strong password!";
		message.style.color = "green";
	}
}
function checkPasswordMatch() {
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirm-password").value;
	const matchMessage = document.getElementById("password-message2");

	if (confirmPassword === "") {
		matchMessage.textContent = ""; // No message when confirm-password is empty
		return;
	}

	if (password === confirmPassword) {
		matchMessage.textContent = "Passwords match!";
		matchMessage.style.color = "green";
	} else {
		matchMessage.textContent = "Passwords do not match.";
		matchMessage.style.color = "red";
	}
}
