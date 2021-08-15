document.getElementById("btn_register").onclick = function() {
    
    let user;

    user = document.getElementById("nickname").value;

    if (user != "") {
        localStorage.setItem("nickname", user);
        window.location.href = "chat.html";
    }  
}