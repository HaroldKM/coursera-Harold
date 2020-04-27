function myFunction() {
    var w = document.getElementById("brandName");
    var x = document.getElementById("mytopnav");
    var y = document.getElementById("kosher");
    var z = document.getElementById("brand");

    if(w.className === "smalfont"){
        w.className = "";
    }else{
        w.className = "smalfont";
    }

    if(x.className === "topnav"){
        x.className = " responsive";
    }else{
        x.className = "topnav";
    }

    if(y.className === "fab fa-gripfire fa-2x smalfont"){
        y.className = " fab fa-gripfire fa-2x ";
    }else{
        y.className = "fab fa-gripfire fa-2x smalfont";
    }

    if(z.className === "navbar-brand"){
        z.className = "";
    }else{
        z.className = "navbar-brand";
    }
}

