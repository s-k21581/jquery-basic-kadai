$(function() {
  // クリックしたらテキストの色を変更
  $('#change-color').on('click', function() {
   $('#target').css('color', 'red');
   });

  //  クリックしたらテキストを変更
  $('#change-text').on('click', function() {
   $('#target').text('Hello!');
   });

  // クリックしたらフェードアウトで文字が消える
  $('#fade-out').on('click', function() {
   $('#target').fadeOut();
   });

  // クリックしたらフェードインで文字が現れる
  $('#fade-in').on('click', function() {
   $('#target').fadeIn();
   });
});