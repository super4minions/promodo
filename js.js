var m = document.getElementById('myNumber').value;
var t, count;
var called = true;
var CCOUNT = m * 60 * 1000;

function cddisplay() {
    min = Math.floor((count / 1000 / 60) << 0),
        sec = Math.floor((count / 1000) % 60)
    if (isNaN(sec)) {
        sec = 0;

    }
    document.getElementById('mints').innerHTML = min;
    document.getElementById('scnd').innerHTML = sec;
}

function countdown() {

    cddisplay();

    if (count == 0) {


    } else {

      document.getElementById("start").disabled = true;
      count -= 1000;
      t = setTimeout("countdown();", 1000);



     }

}

function cdpause() {



    document.getElementById('Pause').onclick=function(){
        document.getElementById("start").disabled = false;
          clearTimeout(t)  }

}


function cdreset() {
    m = document.getElementById('myNumber').value;
    // resets countdowns

    cdpause();
    CCOUNT = m * 60 * 1000;

    count = CCOUNT;
    cddisplay();
    document.getElementById("start").disabled = false;
}
