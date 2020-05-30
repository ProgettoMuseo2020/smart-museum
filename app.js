function myFunction(){
    var checkBox = document.getElementById("chk");
    var opere = document.getElementById("opere");

    if (checkBox.checked == true) {
        opere.style.display = "none";

    } else if (checkBox.checked == false){
        setTimeout(function myFunction() {opere.style.display = "flex";}, 400); // Setto un timer
    }
}
