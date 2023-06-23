var dark_on = false;
document.getElementById("switch").onclick = function(){
    if(dark_on == false){
        document.getElementById("switch").style.backgroundColor = "#FFFFFF";
        document.getElementById("search_bar_input").style.color = "#FFFFFF"
        document.getElementById("blurr").style.background = "linear-gradient(#747d8c,#57606f,#747d8c,#2f3542)"
        document.getElementById("blurr").style.filter = "blur(500px)"
        document.body.style.backgroundColor = "var(--main-colour)"
        document.querySelector(".bb").style.color = "#FFFFFF"
        document.querySelector(".side_info").style.color = "#FFFFFF"
        dark_on = true;
    }else if(dark_on != false){
        document.getElementById("switch").style.backgroundColor = "#000000";
        document.getElementById("search_bar_input").style.color = "var(--main-colour)"
        document.getElementById("blurr").style.background = "linear-gradient(#1e90ff , #3742fa,#2ed573,#ffa502)"
        document.getElementById("blurr").style.filter = "blur(1000px)"
        document.body.style.backgroundColor = "#FFFFFF"
        document.querySelector(".bb").style.color = "var(--main-colour)"
        document.querySelector(".side_info").style.color = "var(--main-colour)"
        dark_on = false;
    }
    
}
 