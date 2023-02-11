var darkbtn = document.getElementById("darkIcon");
var lightbtn = document.getElementById("lightIcon");
darkbtn.onclick = function(){
    document.body.classList.toggle("dark_theme");
    let c = document.querySelectorAll(".client");
    c.forEach((item)=>{
        item.style.filter = "grayscale(0)";
    })

    darkbtn.style.display = "none";
    lightbtn.style.display = "block";
}
lightbtn.onclick = function(){
    document.body.classList.toggle("dark_theme");
    let c = document.querySelectorAll(".client");

    c.forEach((item)=>{
        item.style.filter = "grayscale(9)";
    })
    darkbtn.style.display = "block";
    lightbtn.style.display = "none";
}



var menuBtn = document.getElementById("menuIcon");
var closeBtn = document.getElementById("closeIcon");
var menu = document.getElementById("menu");

menuBtn.onclick = function(){
    menu.classList.toggle("open_menu");
}
closeBtn.onclick = function(){
    menu.classList.toggle("open_menu");
}



// ************************   PLAY  VIDEO  ************************************

var vdo_con = document.getElementById("play_video");
function play_video_func(){
    console.log("1");
    vdo_con.classList.toggle("OpenVideo");
}
function close_video_func(){
    console.log("1");
    vdo_con.classList.toggle("OpenVideo");
}

// ******************************   Registration Form    *************************

function register_func(){
document.getElementById('register_form').style.display = "flex";
}
function close_reg_form_func(){
document.getElementById('register_form').style.display = "none";
}
function  validateform(){
    window.location.assign(template_page.html);
}   

function password_strength(){
   let pass =  document.getElementById("floatingPassword").value;
   var strength = 0;
   var strengthBar = document.getElementById("meter");
    if(pass.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){
        strength++;
}
    if(pass.match(/[~<>?]+/)){
        strength++;
}
    if(pass.match(/[!@#$%^&*()]+/)){
        strength++;
} 
    if(pass.length > 5 && pass.length >0){
        strength++;
}
if(pass.length < 0){
    strength = 0;
}

switch(strength) {
    case 0:
        strengthBar.style.width = "0%"
        break

    case 1:
        strengthBar.style.width = "25%";
        strengthBar.style.background = "rgb(237, 72, 7)";
        break

    case 2:
        strengthBar.style.width = "50%";
        strengthBar.style.background = "rgb(237, 141, 7)";
        break

    case 3:
            strengthBar.style.width = "75%";
            strengthBar.style.background = "rgb(164, 237, 7)";
            break

    case 4:
        strengthBar.style.width = "100%";
        strengthBar.style.background = "rgb(7, 237, 15)";
        break
}

}


// ******************************   SHOW MORE    *************************
var clickBtn = false;
function display_con_fun(){
    if(clickBtn == false){
    document.getElementById('unseen_div').style.height = "350px";
    clickBtn = true;
    }
    else{
    document.getElementById('unseen_div').style.height = "0px";
    clickBtn = false;
    }
    
}














// ***************************************    COUNTER    ***********************************
var client = 0;
var project = 0;
var c_satisf = 0;
var Experience = 0;
const section = document.getElementById("stastics");
const workObjserver  = new IntersectionObserver((entries, observer) => {
    const {entry} = entries;
    console.log(entries);

    setInterval(client_Func, 50);
    function client_Func(){
        if(client<50){
            client++;
            document.getElementById("client").innerHTML = client + "+";
    }
    }

    setInterval(satisf_func, 10);
    function satisf_func(){
        if(c_satisf<100){
            c_satisf++;
            document.getElementById("c_satisf").innerHTML = c_satisf + "%";
        }
    }

    setInterval(project_Func, 10);
    function project_Func(){
        if(project<300){
                project++;
                document.getElementById("project").innerHTML = project + "+";
            }
    }

    setInterval(experience_func, 100);
    function experience_func(){
        if(Experience<10){
                Experience++;
                document.getElementById("Experience").innerHTML = Experience + "+";
        }
    }

if(!entry.isIntersecting) return;


}, {
    root: null,
    threshold: 0,
});


workObjserver.observe(section);






// *****************************************  Testimonials   Slider  *************************

var slide_num = 1;
var first_slide = document.getElementById("first_slide");
var second_slide = document.getElementById("second_slide");
var third_slide = document.getElementById("third_slide");
var slide_current = 1;

function pre_slide(){
        slide_num--;
        if(slide_num==0){
            current_slide(0);
        }
        if(slide_num==-1){
            current_slide(2);
        }
        if(slide_num==-2 || slide_num == 1){
            current_slide(1);
            slide_num = 1;
        }
}
function next_slide(){
    slide_num++;
    if(slide_num==2){
        current_slide(2);
    }
    if(slide_num==3){
        current_slide(0);
        slide_num = 0;
    }
    if(slide_num==1){
        current_slide(1);
    }
}

function current_slide(slide_current){
    switch(slide_current){
        case 0:
            first_slide.style.display = "flex";
            second_slide.style.display = "none";
            third_slide.style.display = "none";
          break;

        case 1:
            first_slide.style.display = "none";
            second_slide.style.display = "flex";
            third_slide.style.display = "none";
          break;

        case 2:
            first_slide.style.display = "none";
            second_slide.style.display = "none";
            third_slide.style.display = "flex";
          break;

        default:
            first_slide.style.display = "flex";
            second_slide.style.display = "none";
            third_slide.style.display = "none";
    }
}

