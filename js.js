var m = document.getElementById('myNumber').value;
var t, count;
var called = false;
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
    called = true;
    cddisplay();
    if (count == 0) {
        // time is up
    } else {
        count -= 1000;
        t = setTimeout("countdown();", 1000);
    }
}

function cdpause() {
    // pauses countdown
    clearTimeout(t);
}

function cdreset() {
    m = document.getElementById('myNumber').value;
    // resets countdowns

    cdpause();
    CCOUNT = m * 60 * 1000;

    count = CCOUNT;
    cddisplay();
}
cdreset();
countdown();
