$(document).ready(function () {
  //section Tian start//

  $("#loginBtn").click(e => {
    $(".welcomePage").hide();
    $("#appPage").removeClass("visuallyhidden");
  });

  $("#loginBtnLogo").hover(() => {
    $(this).removeClass("fa-flip-horizontal");
  });

  $("#timerBtn").click(() => {
    let section = $("#timerSection");
    section.toggle();
  });

  $("#exerciseBtn").click(() => {
    let section = $("#exerciseSection");
    section.toggle();
  });
  $("#puzzleBtn").click(() => {
    let section = $("#puzzleSection");
    section.toggle();
  });
  $("#trafficBtn").click(() => {
    let section = $("#trafficSection");
    section.toggle();
  });

  //section Tian end//

  //BEFORE EVERYONE FINISH THEIR OWN PART I THINK WE SHOULD SPLIT OUR JS CODE SO THAT WE CAN EASILY KEEP TRACK OF OUR STAFF AND MAKE CHANGES//

  //section Kervin start//

  //section Kervin end//

  //section Jayson start//

  //section Jayson end//

  //section Firoz start//

  //section Firoz end//

  //section Piotr start//

  //section Piotr end//
});
