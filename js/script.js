let SearchBTN = document.querySelector("header .icons .fa-search");
let SearchBAR = document.querySelector("header .search_bar");
let UserBTN = document.querySelector("header .icons .fa-user");
let UserBAR = document.querySelector(".login_form");
let CloseUserBar = document.getElementById("form_close");
let MenuBTN = document.getElementById("menu-bar");
let MenuBAR = document.querySelector("header .navbar");
let videoBTN = document.querySelectorAll(".home .controls .vid-btn");


SearchBTN.addEventListener("click",function(){
    SearchBAR.classList.toggle('active');
    SearchBTN.classList.toggle('fa-times');
})

UserBTN.addEventListener('click',function(){
    UserBAR.classList.add('active');
});

CloseUserBar.addEventListener('click',function(){
    UserBAR.classList.remove('active')
})

MenuBTN.addEventListener('click',function(){
    MenuBAR.classList.toggle('active');
    MenuBTN.classList.toggle('fa-times');
})

window.onscroll = ()=>{
    SearchBAR.classList.remove('active');
    SearchBTN.classList.remove('fa-times');
    UserBAR.classList.remove('active');
    MenuBAR.classList.remove('active');
    MenuBTN.classList.remove('fa-times');
}


// for(var i = 0; i < videoBTN.length; i++){
//     let btn = videoBTN[i]
//     btn.addEventListener('click',function(){
//         document.querySelector(".home .controls .active").classList.remove('active');
//         btn.classList.add('active');
//         let pathvideo = btn.getAttribute('data-src');
//         document.querySelector('.home .video-container .vid').src = pathvideo;
//     });
// }

videoBTN.forEach(function(btn){
    btn.addEventListener('click', function(){
        document.querySelector(".home .controls .active").classList.remove('active');
        btn.classList.add('active')
        let pathvideo = btn.getAttribute('data-src');
        document.querySelector('.home .video-container .vid').src = pathvideo;
    })
})