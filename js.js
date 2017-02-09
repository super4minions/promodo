  var t, count;
function Set (){

  var m = document.getElementById('myNumber').value;

  var called = true;
  var CCOUNT = m * 60 * 1000;

}
function cddisplay() {
    min = Math.floor((count / 1000 / 60) << 0),
        sec = Math.floor((count / 1000) % 60)
    if (isNaN(sec)) {
        sec = 0;

    }
    document.getElementById('mints').innerHTML = min;
    document.getElementById('scnd').innerHTML = sec;
}

function back (){

return count
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

clearTimeout(t)
  document.getElementById("start").disabled = false;


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
