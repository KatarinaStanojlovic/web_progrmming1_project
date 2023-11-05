////jQuery////

//Show more funkcionalnost
$('#showMore1').click(function(){
    $('#moreText1').toggle()
    if($('#moreText1').is(':visible'))
    {
        $(this).html('Show less');
    }
    else
    {
        $(this).html('Show more');
    }
})

$('#showMore2').click(function(){
    $('#moreText2').toggle()
    if($('#moreText2').is(':visible'))
    {
        $(this).html('Show less');
    }
    else
    {
        $(this).html('Show more');
    }
})

$('#showMore3').click(function(){
    $('#moreText3').toggle()
    if($('#moreText3').is(':visible'))
    {
        $(this).html('Show less');
    }
    else
    {
        $(this).html('Show more');
    }
})

$('#showMore4').click(function(){
    $('#moreText4').toggle()
    if($('#moreText4').is(':visible'))
    {
        $(this).html('Show less');
    }
    else
    {
        $(this).html('Show more');
    }
})

//Onload animacija

let bg = document.createElement('div');
$(bg).attr('id','loaderBackground');
$(bg).css(
    {
        'position':'fixed',
        'top':'0',
        'left':'0',
        'width':'100vw',
        'height':'100vh',
        'z-index':'1000',
        'background':'#33211D',
        'display':'flex',
        'justify-content':'center',
        'align-items':'center',
    }
)

let counter = document.createElement('p');
$(counter).css(
    {
        'color':'whitesmoke',
        'font-weight':'bold',
        'font-size':'4rem',
        'font-family':'Roboto, san-serif'
    }
)

let load = 1;
$(counter).html(load+'%');
$(bg).append(counter);
$('body').append(bg);
$('body').css('overflowY','hidden');

function increment(){
    load++; //brojac
    $(counter).html(load+'%');
    if(load==100) //ako je 100%
    {
        clearInterval(interval); //prekid intervala
        $('body').css('overflowY','scroll');
    }
    if(load == 80)
    {
        $(counter).fadeOut('slow'); //gasenje overlay-a
        $(bg).fadeOut('slow');
    }
}

let interval = setInterval(increment,15);

////// VALIDACIJA FORME ///////

var fullName=document.getElementById("fullName");
var email=document.getElementById("email");
var date = document.getElementById("date");
var select = document.getElementById("select");

var errFullName = document.querySelector('#errFullName');
var errEmail = document.querySelector('#errEmail');
var errSelect = document.querySelector('#errSelect');
var errDate = document.querySelector('#errDate');

var btn = document.querySelector('#submitBtn');


var regexFullName = /^(([a-zšđčćžA-ZŠĐČĆŽ']{2,20})+ ([a-zšđčćžA-ZŠĐČĆŽ']{2,20})+)$/;
var regexEmail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;


function fullNameCheck() {
    if (regexFullName.test(fullName.value)){
        errFullName.innerHTML='';
        errFullName.classList.remove('bad');
        return true;
    } 
    else {
      errFullName.innerHTML = "Correct format: Dolly Bell";
      errFullName.classList.add('bad');
      return false;
    }
};


function emailCheck () {
    if (regexEmail.test(email.value))
    {
        errEmail.innerHTML = '';
        email.classList.remove('bad');
        return true
    }
    else {
        errEmail.innerHTML = "Correct format: example@gmail.com";
        errEmail.classList.add('bad');
        return false
    }
};


function selectCheck () {
    if (select.value != 'Person')
    {
        errSelect.innerHTML = '';
        errSelect.classList.remove('bad');
        return true
    }
    else {
        errSelect.innerHTML = "Select the number of people.";
        errSelect.classList.add('bad');
        return false
    }
};


function dateCheck () {
    var inpDate = new Date(date.value);
    var currDate = new Date();
        
    if(inpDate.setHours(0, 0, 0, 0) > currDate.setHours(0, 0, 0, 0))
    {
        errDate.innerHTML = "";
        errDate.classList.remove('bad');
        return true
    } 
    else {
        errDate.innerHTML = "Date can't be in the past.";
        errDate.classList.add('bad');
        return false
    }         
};


fullName.addEventListener("blur", fullNameCheck);
email.addEventListener("blur", emailCheck);
select.addEventListener("blur", selectCheck);
date.addEventListener("blur", dateCheck);


btn.onclick = function formCheck(e){  
    e.preventDefault();

    fullNameCheck();
    emailCheck();
    selectCheck();
    dateCheck();

    if (fullNameCheck() && emailCheck() && selectCheck() && dateCheck()){
        location.reload();
        return true;
    }
    else
    {
        return false;
    }
}

//Header prati na scroll
addEventListener('scroll', function(){
    if(scrollY>0)
    {
        navbar.classList.add('follow');
    }
    else
    {
        navbar.classList.remove('follow');
    }
})

//Lightroom kreiranje

var lightroomBg = document.createElement('div');
lightroomBg.classList.add('lightroomBg');

var imgContainer = document.createElement('img');
imgContainer.classList.add('imgContainer');

var imgDescription = document.createElement('p');
imgDescription.classList.add('description')

lightroomBg.appendChild(imgContainer);
lightroomBg.appendChild(imgDescription);

addEventListener('click',function(x){
    if(x.target.classList.contains('lightroom'))
    {
        document.querySelector('body').appendChild(lightroomBg);
        imgContainer.src = x.target.src;
        imgDescription.innerHTML=x.target.alt;
    }
    
    if(x.target.classList.contains('lightroomBg'))
    {
        lightroomBg.remove();
        imgContainer.src = '';
        imgDescription.innerHTML='';
    }
})

//menu open

var menuOpener = document.querySelector('#burger');
var menu = document.querySelector('#burgerMenu');
opened = false;

menuOpener.onclick = function(){
    if(!opened)
    {
        menu.style.transform = 'translateX(0)';
        opened=true;
    }
    else
    {
        menu.style.transform = 'translateX(100%)';
        opened=false;
    }
}

//menu zatvaranje na klik izvan
document.onclick = function(x)
{
    if(opened==1 && x.target.id!="burger" && x.target.parentNode.id!="burger")
    {
        burgerMenu.style.transform="translateX(100%)";
        opened=false;
    }
}