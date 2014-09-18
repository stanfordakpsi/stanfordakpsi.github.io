/* Citing the first answer from StackOverflow
 * https://stackoverflow.com/questions/476679/preloading-images-with-jquery
 *
 * Used for non-commercial purposes
 */

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

preload([
    './img/spring_2013/test.JPG',
    './img/spring_2014/AKPsi_banner_fun.JPG',
    './img/spring_2014/napa_tour.JPG',
    './img/spring_2014/people_moving.JPG',
    './img/spring_2014/sports_day.JPG',
    './img/spring_2014/case_interview.JPG'
]);