$(function () {
  var vote = '<div id="vote"><div class="color"><a href="#"><img src="img/t-gray.png" alt="회색티" id="gray"></a></div><div class="color"><a href="#"><img src="img/t-yellow.png" alt="노란티" id="yellow"></a></div><div class="color"><a href="#"><img src="img/t-green.png" alt="녹색티" id="green"></a></div></div>';

   $('#selector').append(vote);

  $('#selector a').on('click', function (e) {
  e.preventDefault();

  var aaa = 'vote=' + $(e.target).attr('id');

  console.log(aaa);

  $.get('vote.php', aaa, function (ddd) {
    $('#selector').html(ddd);
  });
});


});
//A.append(b) a 내부의 끝부분에 b삽임
//A.prepend(b) a 내부의 앞부분에
//A.after(b) a가끝난후에
//A.before(b)
