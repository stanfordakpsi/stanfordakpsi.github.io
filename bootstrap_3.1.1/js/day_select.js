pic_obj = document.getElementsByClassName("day-picture-div")[0];

document.getElementById("monday").onmouseover = function() {Monday() };
document.getElementById("tuesday").onmouseover = function() {Tuesday() };
document.getElementById("wednesday").onmouseover = function() {Wednesday() };
document.getElementById("thursday").onmouseover = function() {Thursday() };
document.getElementById("friday").onmouseover = function() {Friday() };
document.getElementById("saturday").onmouseover = function() {Saturday() };

function Monday() {
  document.getElementById("event-title").innerHTML = "Introduction to AKPsi";
  document.getElementById("event-details").innerHTML = "5pm-7pm @ Black Community Services Center";
  document.getElementById("event-description").innerHTML = "Come out and see what Alpha Kappa Psi is all about!" + 
  " We will be introducing the organization <br> and hosting an open networking session right after.";
  document.getElementById("event-div").style.opacity = 0;
  pic_obj.style.opacity = 0;
  pic_obj.style.backgroundImage = "url('bootstrap_3.1.1/img/spring_2015/AKPsi_banner.JPG')";
  $(".day-picture-div").animate({opacity: '1'}, 350);
  window.setTimeout("$('#event-div').animate({opacity: '0.8'}, 1000)", 750);

}
function Tuesday() {
  document.getElementById("event-title").innerHTML = "Meet the Brothers";
  document.getElementById("event-details").innerHTML = "8pm-10pm @ Toyon Main Lounge";
  document.getElementById("event-description").innerHTML = "Tuesday is a chance to get" +
  " to know the brothers on a <br> more informal level. Come for the food and stay for the company!";
  document.getElementById("event-div").style.opacity = 0;
  pic_obj.style.opacity = 0;
  pic_obj.style.backgroundImage = "url('bootstrap_3.1.1/img/spring_2015/AKPsi_fun.JPG')";
  $(".day-picture-div").animate({opacity: '1'}, 350);
  window.setTimeout("$('#event-div').animate({opacity: '0.8'}, 1000)", 750);
}
function Wednesday() {
  document.getElementById("event-title").innerHTML = "Alumni Night";
  document.getElementById("event-details").innerHTML = "7pm-8:30pm @ 420-041 (Subject to Change)";
  document.getElementById("event-description").innerHTML = "Our Alumni are working all around the world; come" +
   " meet a few that are still in the area <br> and hear about how AKPsi shaped their college experiences!";
  document.getElementById("event-div").style.opacity = 0;
  pic_obj.style.opacity = 0;
  pic_obj.style.backgroundImage = "url('bootstrap_3.1.1/img/spring_2014/napa_tour.JPG')";
  $(".day-picture-div").animate({opacity: '1'}, 350);
  window.setTimeout("$('#event-div').animate({opacity: '0.8'}, 1000)", 750);
}
function Thursday() {
  document.getElementById("event-title").innerHTML = "Resume Workshop";
  document.getElementById("event-details").innerHTML = "7pm-9pm @ Huang Basement";
  document.getElementById("event-description").innerHTML = "Hone your resume in small group work sessions with" +
  " our brothers.";
  document.getElementById("event-div").style.opacity = 0;
  pic_obj.style.opacity = 0;
  pic_obj.style.backgroundImage = "url('bootstrap_3.1.1/img/spring_2015/resume_workshop.jpg')";
  $(".day-picture-div").animate({opacity: '1'}, 350);
  window.setTimeout("$('#event-div').animate({opacity: '0.8'}, 1000)", 750);
}
function Friday() {
  document.getElementById("event-title").innerHTML = "Sports Day";
  document.getElementById("event-details").innerHTML = "5pm-7pm @ Manzanita Field";
  document.getElementById("event-description").innerHTML = "Like every Stanford student, we love being outside!" +
  " Come play ball with us or join us on the grass!";
  document.getElementById("event-div").style.opacity = 0;
  pic_obj.style.opacity = 0;
  pic_obj.style.backgroundImage = "url('bootstrap_3.1.1/img/spring_2015/sports_day.jpg')";
  $(".day-picture-div").animate({opacity: '1'}, 350);
  window.setTimeout("$('#event-div').animate({opacity: '0.8'}, 1000)", 750);
}
function Saturday() {
  document.getElementById("event-title").innerHTML = "Case-Study Workshop";
  document.getElementById("event-details").innerHTML = "9am-1pm @ Huang Basement";
  document.getElementById("event-description").innerHTML = "Work on real case interview questions with our" +
  " brothers and learn what it's like <br> to be a consultant.";
  document.getElementById("event-div").style.opacity = 0;
  pic_obj.style.opacity = 0;
  pic_obj.style.backgroundImage = "url('bootstrap_3.1.1/img/spring_2015/case_workshop.JPG')";
  $(".day-picture-div").animate({opacity: '1'}, 350);
  window.setTimeout("$('#event-div').animate({opacity: '0.8'}, 1000)", 750);
}