 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openL(eid) {
	/*alert(document.getElementById(eid).nextSibling.classList);*/
	var elementList = document.getElementById(eid).nextSibling.classList;
	elementList.toggle("show");
}