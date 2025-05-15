(function () {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
})()

// Allows having hardcoded credentials and custom validations
document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('form');
	const emailInput = document.getElementById('email');
	const passwordInput = document.getElementById('password');

	const validEmail = 'user@gmail.com';
	const validPassword = 'password123';

	form.addEventListener('submit', function (event) {
		if (!form.checkValidity()) {
			return;
		}

		event.preventDefault();

		const enteredEmail = emailInput.value.trim();
		const enteredPassword = passwordInput.value;

		if (enteredEmail === validEmail && enteredPassword === validPassword) {
			window.location.href = 'homePage.html';
		} else if (enteredEmail === validEmail && enteredPassword !== validPassword) {
			alert('The password is incorrect');
		} else {
			alert('Invalid email or password');
		}
	});
});
