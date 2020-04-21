function myFunction() {
    var x = document.getElementById("mytopnav");
    var y = document.getElementById("kosher");
    var z = document.getElementById("brand");

    if(x.className === "topnav"){
        x.className = " responsive";
        
    }else{
       
        x.className = "topnav";
    }

    if(z.className === "navbar-brand"){
        z.className = "";
    }else{
        z.className = "navbar-brand";
    }
}

