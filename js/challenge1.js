window.addEventListener("load", function() {
    document.getElementsByTagName("h1")[0].style.color = "#5729CE";
	document.getElementsByTagName("h1")[0].style.textAlign = "center";
});
window.addEventListener("dblclick", function() {
    window.alert(Date());
});
document.querySelector("#toggle").addEventListener("change", function() {
    if (document.querySelector("#emailBox").classList.contains("hidden")) {
        document.querySelector("#emailBox").classList.remove("hidden");
    }
    else {
        document.querySelector("#emailBox").classList.add("hidden");
    }
});