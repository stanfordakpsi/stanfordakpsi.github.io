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
    '../bootstrap_3.1.1/img/spring_2013/test.JPG',
    '../bootstrap_3.1.1/img/spring_2014/AKPsi_banner_fun.JPG',
    '../bootstrap_3.1.1/img/spring_2014/napa_tour.JPG',
    '../bootstrap_3.1.1/img/spring_2014/people_moving.JPG',
    '../bootstrap_3.1.1/img/spring_2014/sports_day.JPG',
    '../bootstrap_3.1.1/img/spring_2014/case_interview.JPG'
]);