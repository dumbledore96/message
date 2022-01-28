function messagetest(message , main){
    var text = document.getElementById("visible").innerHTML;
    event.preventDefault();
    text = "<h3>" +message+ "</h3>" +main+"<hr>"+text;
    document.getElementById("visible").innerHTML = text;
    document.getElementById("main").value = "";
    document.getElementById("message").value = "";
    }
    