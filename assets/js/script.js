const menuBars = document.querySelectorAll(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".fa-times");

menuBars.forEach((menubar) => {
	menubar.addEventListener("click", function () {
		sidebar.classList.toggle("show-sidebar");
	});
});
