window.onload = function() {

    let nickUser = localStorage.getItem("nickname");

    document.getElementById("user_nickname").innerHTML = nickUser;
    
    

    document.addEventListener("keydown", function(enter) {
        if(enter.which == 13) {
            
            
        }
    })

    document.getElementById("btn_send").onclick = function() {
    
        let msg = document.getElementById("texts_user").value;

        document.getElementById("texts_user").value = "";
    
        document.getElementById("box_chat").innerHTML +=    '<div class="user_msg_box">' +
                                                                '<div class="user_perfil">' +
                                                                    '<div class="img_box">' +
                                                                        '<img src="images/perfil.jpg">' +
                                                                    '</div>' + 
                                                                    '<p>' + nickUser + '</p>' +  
                                                                '</div>' +
                                                                '<div class="text_box">' +
                                                                    '<p class="msg_user">' + msg + '</p>' +
                                                                '</div>' +    
                                                            '</div>';    
    
    }

}



