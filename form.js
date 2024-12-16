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
