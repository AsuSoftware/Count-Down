$(document).ready(function () {
  let $days = $("#day"); //day from html
  let $hours = $("#hour"); //hour from html
  let $minutes = $("#minutes"); //minut from html
  let $seconds = $("#second"); //secondi from html







  let $tim = setInterval(getInput, 1000); //delay cioè ogni quanto si muove il count




  function getInput() {
    const $dat = new Date($("#dat").val()); //Data from html(input) value
    const $timp = new Date(); //prendi la data di oggi
    const $data = $dat.getTime(); //la data dal input
    const $day = $timp.getTime(); //prendi la data dal pc


    const $dayRemaning = $data - $day; //cate zile raman

    if (isNaN($dayRemaning)) {
      $days.html('-'); //converti in giorni

      $hours.html('-'); //converti in ore
      $minutes.html('-'); //converti in minuti
      $seconds.html('-'); //converti in secondi
    } else {







      const $dayy = Math.floor($dayRemaning / (1000 * 60 * 60 * 24));
      const $ora = Math.floor(($dayRemaning % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const $minute = Math.floor(($dayRemaning % (1000 * 60 * 60)) / (1000 * 60));
      const $second = Math.floor(($dayRemaning % (1000 * 60)) / 1000);




      $days.html($dayy); //converti in giorni

      $hours.html($ora); //converti in ore
      $minutes.html($minute); //converti in minuti
      $seconds.html($second); //converti in secondi


      if ($dayRemaning < 0) {
        $days.html('D'); //converti in giorni
        $hours.html('O'); //converti in ore
        $minutes.html('N'); //converti in minuti
        $seconds.html('E'); //converti in secondi
      }

    }

  }


});