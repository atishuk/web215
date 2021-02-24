const focus_array = document.querySelectorAll('input, textarea');
for (let i = 0; i < focus_array.length; i++) {
	focus_array[i].onfocus = () => {
		focus_array[i].setAttribute("style", "background-color: #D5EEF3;");
	}
	focus_array[i].onblur = () => {
		focus_array[i].setAttribute("style", "background-color: #FBCBDE;");
	}
}

var courses_names = ["WEB-115-85: Web Markup and Scripting", "DBA-110-50: Database Concepts", "CSC-143-90: Object-Oriented Programming", "CSC-122-85: Python Application Development","", "", "", "", "", "", ""];
function add_courses() {
	let num = document.getElementById("courses").value;
	for (let i = 0; i < num; i++) {
		add_course(i,courses_names[i]);
	}
}

function add_course(course_num, course_name) {
	let course_parent = document.getElementById("new_courses");
	let input_course = document.createElement("input");
	input_course.type = "text";
	input_course.className = "course";
	input_course.setAttribute("value", course_name);
	let id_name = "course" + String(course_num);
	input_course.setAttribute("id", id_name);
	course_parent.appendChild(input_course);
}
function get_name() {
	let first_name = document.getElementById("first_name").value;
	let last_name = document.getElementById("last_name").value;
	let middle_initial = document.getElementById("middle_initial").value;
	if (middle_initial == "" || middle_initial == " ") {
		middle_initial = "";
	} else {
		middle_initial += ". ";
	}
	let full_name = first_name + " " + middle_initial + last_name;
	return full_name;
}

/*function greeting() {
	let name = get_name();
	let greeting_header = document.getElementById("intro_greeting");
	let greeting_text = greeting_header.textContent;
	if (greeting_text.slice(-(name.length + 1)) != (name + "!")) {
		greeting_header.textContent = greeting_header.textContent.replace("!", " " + name + "!");
	}
}*/

function greeting() {
	let name = get_name();
	let greeting_header = document.getElementById("intro_greeting");
	let greeting_text = "Welcome " + name + "!";
	greeting_header.textContent = greeting_text;
}


function add_intro() {
	let intro_form = document.querySelector("form");
	var intro_ul = document.createElement("ul");
	//let some_text = document.createTextNode("some some some text");
	//intro_div.appendChild(some_text);
	intro_form.parentNode.appendChild(intro_ul);
		
	let labels = document.querySelectorAll(".questions label");
	let description_array = description_list();
	for (let i = 0; i < labels.length; i++) {
		let intro_li = document.createElement("li");
		
		let strong_elem = document.createElement("strong");
		strong_elem.textContent = labels[i].textContent;
		
		let p_elem = document.createElement("p");
		p_elem.textContent = " " + description_array[i];
		
		intro_li.appendChild(strong_elem);
		intro_li.appendChild(p_elem);
		//let new_text = document.createTextNode(labels[i].textContent + " " + description_array[i]);
		//intro_li.appendChild(new_text);
		//intro_li.textContent = "<b>" + labels[i].textContent + "</b>" + " " + description_array[i];
		
		intro_ul.appendChild(intro_li);
	}
}

function change_header() {
	let intro_greeting = document.getElementById("intro_greeting");
	let new_greeting = get_name();
	intro_greeting.textContent = new_greeting;
	
	let intro_header = document.getElementById("intro_heading");
	let new_header = "Introduction ";
	intro_header.textContent = new_header;
}


function del_form() {
	let intro_form = document.querySelector("form");
	intro_form.parentNode.removeChild(intro_form);
	
}
function description_list() {
	let intro_array = [];
	intro_array.push(document.getElementById("per_background").value);
	intro_array.push(document.getElementById("prof_background").value);
	intro_array.push(document.getElementById("academ_background").value);
	intro_array.push(document.getElementById("course_background").value);
	intro_array.push(document.getElementById("os").value);
	
	let num = document.getElementById("courses").value;
	let courses = "";
	let course_collection = document.querySelectorAll(".course");
	for (let i = 0; i < num; i++) {	
		courses += (course_collection[i].value + ", ");
	}
	courses = courses.slice(0, -2) + ".";
	intro_array.push(courses);
	
	intro_array.push(document.getElementById("interesting_fact").value);
	intro_array.push(document.getElementById("thing_to_share").value);

	return intro_array;
}

function submit_introduction() {
	let course_collection = document.querySelectorAll(".course");
	if (course_collection[0] == undefined) {
		alert("Add information about your course(s)");
	} else {
		let name = get_name();
		alert("Thank you, " + name + "!"); 
		add_intro();
		change_header();
		del_form();
	}
}

