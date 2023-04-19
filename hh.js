const menyu = document.querySelector(".ul-men")
const menyu1 = document.querySelector("menyu")
const menyu2 = document.querySelector("menyu2")

function ok() {
	
	document.querySelector("ul").style.height = ("180px");
	document.querySelector(".menyu").style.opacity = ("-1")
	document.querySelector(".menyu2").style.opacity = ("1")
	document.querySelector("li").style.opacity = ("1")
	document.querySelector("ul").style.opacity = ("1")
	document.querySelector(".menyu2").style.zIndex = ("10")
}

function ok1() {
	document.querySelector(".ul-men").style.height = ("0px");
	document.querySelector(".menyu").style.opacity = ("1")
	document.querySelector(".menyu2").style.opacity = ("-1")
	document.querySelector("li").style.opacity = ("-1")
	document.querySelector(".menyu2").style.zIndex = ("-10")
}




