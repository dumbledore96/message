function messagetest(message, main) {
    event.preventDefault();
    if (message != "" && main != "") {
        var text = document.getElementById("visible").innerHTML;
        const dateObject = new Date();

        var bigtime = (dateObject.getMonth() + 1) + "/" + dateObject.getDate();
        var time = dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds();

        text = "<h2>" + message + "</h2>"+bigtime + " " + time +"</br>"+ main +"<hr>"+text;

        document.getElementById("visible").innerHTML = text;

        document.getElementById("main").value = "";
        document.getElementById("message").value = "";
    }
    else {
        alert("輸入不可為空白輸入");
    }
}


