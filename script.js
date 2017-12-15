const delay = 250;

$(document).ready(function() {
  $('#about').click(showAbout);
  $('#resume').click(showResume);
});

function showResume() {
  hide('#about-content', function() {
    show('#resume-content');
  });
}

function showAbout() {
  hide('#resume-content', function() {
    show('#about-content');
  });
}

function show(sel, callback) {
  $(sel).slideDown(delay, callback);
}

function hide(sel, callback) {
  $(sel).slideUp(delay, callback);
}
