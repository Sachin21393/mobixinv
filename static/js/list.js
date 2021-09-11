$(document).ready(function(){
    $(window).scroll(function(){
var positiontop=$(document).scrollTop()
console.log(positiontop);

$('#cardone').addClass('animate__animated animate__backInLeft')
  });
    });