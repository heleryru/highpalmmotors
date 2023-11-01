alert("Hello! I am an alert box!!");

function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    // var menu = document.getElementById("header-navbar");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

}

export function send() {
    console.log("send");
    let vin = document.getElementById("vin").value;
    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;

    console.log(vin);
    console.log(make);
    console.log(model);
    console.log(year);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
        }
    };
    xhttp.open("POST", "/test", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({
        "vin": vin,
        "make": make,
        "model": model,
        "year": year
    }));
}


