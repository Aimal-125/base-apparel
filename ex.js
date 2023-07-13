let x = document.getElementById("email");
let y = document.getElementById("errortxt");
let a = document.getElementById("erspan");
let z = document.getElementById("ov");
let q = document.getElementById("emaildiv");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function myfunc() {
	if(x.value == "") {
		y.style.visibility = "visible";
		y.innerHTML = "Empty Field";
		y.style.color = "hsl(0, 74%, 74%)";
		q.style.border = "2px solid hsl(0, 74%, 74%)";
		a.style.visibility = "visible";
	}
	else if(!(x.value.match(regex))) {
		y.style.visibility = "visible";
		y.innerHTML = "Please provide a valid email";
		y.style.color = "hsl(0, 74%, 74%)";
		q.style.border = "2px solid hsl(0, 74%, 74%)";
		a.style.visibility = "visible";
	}
	else if(x.value.match(regex)) {
		y.style.visibility = "visible";
		y.innerHTML = "Valid email";
		y.style.color = "green";
		q.style.border = "1px solid hsl(0, 6%, 24%)";
		a.style.visibility = "hidden";
	}
}

z.addEventListener("click", myfunc);