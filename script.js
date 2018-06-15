var button = document.querySelector("button");
var h1 = document.querySelector("h1");

button.addEventListener("click", function () {
	var formEl = document.querySelector("form");
	if (!formEl) {
		var form = document.createElement("form");
		var input = document.createElement("input");
		input.setAttribute("class", "btn .btn-primary");
		form.appendChild(input);
		h1.appendChild(form);
	}
})