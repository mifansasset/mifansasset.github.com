$(function(){
  var progress = $.NProgress;

  $('*').on('click', function() {
    progress.start();
  });

  $('*').on('click', function() {
    progress.done();
  });
});
