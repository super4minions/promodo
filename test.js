// var test = QUnit.test;
QUnit.test("Function `cddisplay` should exist", function(t) {
  t.ok(window.cddisplay,'it exists');
});
QUnit.test("Function `countdown` should exist", function(t) {
  t.ok(window.countdown,'it exists');
});
QUnit.test("Function `change` should exist", function(t) {
  t.ok(window.cddisplay,'it exists');
});
QUnit.test("Function `cdpause` should exist", function(t) {
t.ok(window.cddisplay,'it exists');
});
QUnit.test("Function `cdreset` should exist", function(t) {
  t.ok(window.cdreset,'it exists');
});


QUnit.test('Check if countdown work', function(t) {
  cdreset();
//var m=.1;
countdown()
    var done = t.async(1);
    window.setTimeout(function() {
        t.equal(back(), 0, 'everything  works');
        done();
    }, 6000);
});
