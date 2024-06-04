// const videoPlayer = document.querySelector(".first-section");
const controls = document.querySelector(".controls");
const video = document.querySelector(".video");
// const icon = document.querySelector(".icon");
const iconPause = '<i class="fa-sharp fa-solid fa-pause" style="color: #ffffff;"></i>';
const iconPlay = '<i class="fa-solid fa-play" style="color: #ffffff;"></i>';

controls.addEventListener("click", function(event){
    event.preventDefault();
    if(this.innerHTML === '<i class="fa-sharp fa-solid fa-pause" style="color: #ffffff;"></i>'){
        video.pause();
        this.innerHTML = iconPlay;
        document.querySelector(".overlay").style.backgroundColor = "black";
        document.querySelector(".overlay").style.opacity = "0.3";
        document.querySelector(".overlay").style.transition = "all  ease-out";
        document.querySelector(".overlay").style.zIndex = "-2";
        document.querySelector(".controls").style.zIndex = "1";
    }else{
        video.play();
        this.innerHTML = iconPause;
        document.querySelector(".overlay").style.transition = "all  ease-out";
        document.querySelector(".overlay").style.opacity = "0";
        document.querySelector(".overlay").style.zIndex = "-2";
    }
});

document.getElementById("buy").addEventListener("mouseover", function(){
    document.querySelector(".buy-list").style.transform = "translateY(1px)";
    document.querySelector(".buy-list").style.transition = "all 0.5s ease-out";
    document.getElementById("arrow-head").style.transform = "rotate(180deg)";
});

document.getElementById("cross").addEventListener("click", function(){
    document.querySelector(".buy-list").style.transform = "translateY(-278px)";
    document.querySelector(".buy-list").style.transition = "all 0.5s ease-in";
    document.getElementById("arrow-head").style.transform = "rotate(360deg)";
});

document.getElementById("menu-small").addEventListener("click", function(){
    document.querySelector(".menu-horizontal").style.transform = "translate(-1px)";
    document.querySelector(".menu-horizontal").style.transition = "0.5s all ease-out";
    document.querySelector(".menu-horizontal").style.zIndex = "10";
    document.getElementsByTagName("main").style.zIndex = "-1";
});

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".menu-horizontal").style.transform = "translateX(-300px)";
    document.querySelector(".menu-horizontal").style.transition = "0.5s all ease-in";
});

document.getElementById("buy-open").addEventListener("click", function(){
    document.querySelector(".pay-list").style.transform = "translate(1px)";
    document.querySelector(".pay-list").style.transition = "0.5s all ease-out";
    document.querySelector(".pay-list").style.zIndex = "20";
});

document.getElementById("buy-close").addEventListener("click", (e) => {
    document.querySelector(".pay-list").style.transform = "translate(-300px)";
    document.querySelector(".pay-list").style.transition = "0.5s all ease-in";
});


