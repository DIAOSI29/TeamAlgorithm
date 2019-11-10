$(document).ready(function() {
  getLocation();
  //--Piotr--This section makes sure all sections are hidden--//
  //--Only 4 buttons are visible..rest hidden--//
  $("#exerciseSection").hide();
  $("#puzzleSection").hide();
  $("#timerSection").hide();
  $("#trafficSection").hide();
  $("#puzzleSection").hide();
  $("#b3").hide();
  $("#b1").hide();

  //--End--//

  //section Tian start//

  $("#loginBtn").click(e => {
    $(".welcomePage").hide();
    $("#appPage").removeClass("visuallyhidden");
  });

  $("#loginBtnLogo").hover(() => {
    $(this).removeClass("fa-flip-horizontal");
  });

  $(".aaa").click(function() {
    $(this).toggleClass("onClickOption");
  });

  $("#timerBtn").click(() => {
    let section = $("#timerSection");
    $("#exerciseBtn").removeClass("onClickOption");
    $("#puzzleBtn").removeClass("onClickOption");
    $("#trafficBtn").removeClass("onClickOption");
    section.toggle();
  });

  $("#b1").click(() => {
    $("#timerSection").hide();
    $("#puzzleSection").hide();
  });

  $("#exerciseBtn").click(() => {
    $("#timerBtn").removeClass("onClickOption");
    $("#puzzleBtn").removeClass("onClickOption");
    $("#trafficBtn").removeClass("onClickOption");
    let section1 = $("#exerciseSection");
    section1.toggle();
  });

  $("#b2").click(() => {
    $("#exerciseSection").hide();
  });

  $("#puzzleBtn").click(() => {
    $("#timerBtn").removeClass("onClickOption");
    $("#exerciseBtn").removeClass("onClickOption");
    $("#trafficBtn").removeClass("onClickOption");
    let section2 = $("#puzzleSection");
    section2.toggle();
    let section = $("#puzzleSection");
    section.toggle();
    $("#b3").show();
  });

  $("#b3").click(() => {
    $("#puzzleSection").hide();
    $("#b3").hide();
  });

  $("#trafficBtn").click(() => {
    $("#timerBtn").removeClass("onClickOption");
    $("#exerciseBtn").removeClass("onClickOption");
    $("#puzzleBtn").removeClass("onClickOption");
    let section3 = $("#trafficSection");
    section3.toggle();
    initMap();
  });

  $("#b4").click(() => {
    $("#trafficSection").hide();
  });

  //clock//
  function makeTimer() {
    var days = moment().format("ddd");
    var hours = moment().format("HH");
    var minutes = moment().format("mm");
    var seconds = moment().format("ss");

    $("#days").html("<span>D</span></br>" + days);
    $("#hours").html("<span>H</span></br>" + hours);
    $("#minutes").html("<span>M</span></br>" + minutes);
    $("#seconds").html("<span>S</span></br>" + seconds);
  }

  setInterval(function() {
    makeTimer();
  }, 1000);
  //clock//

  //google api start//
  var x = document.getElementById("demo");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  var lat = "";
  var lon = "";
  function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    // x.innerHTML =
    //   "Latitude: " +
    //   position.coords.latitude +
    //   "<br>Longitude: " +
    //   position.coords.longitude;
  }

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: { lat: lat, lng: lon }
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }
  //google api end//
  //news api start//
  function getNews() {
    let queryUrlNews =
      "https://newsapi.org/v2/everything?q=coding&apiKey=b76dbe4baac44acda36c8e6baa935fb4";
    $.ajax({ url: queryUrlNews, method: "GET" }).then(response => {
      let newsUrl = response.articles.url;
      $("#newsIframe").attr("src", newsUrl);
    });
  }

  getNews();
  //news api end//
  //section Tian end//

  //BEFORE EVERYONE FINISH THEIR OWN PART I THINK WE SHOULD SPLIT OUR JS CODE SO THAT WE CAN EASILY KEEP TRACK OF OUR STAFF AND MAKE CHANGES//

  //section Kervin start//

  //section Kervin end//

  //section Jayson start//

  var timer = new Timer(25 * 60 * 1000);

  $("#start").on("click", function() {
    startTimer(timer);
  });

  $("#stop").on("click", function() {
    timer.stop();
  });

  $("#reset").on("click", function() {
    timer.reset();
  });

  $("#breakSub").on("click", function() {
    var isBreak = $("#break-text").css("visibility") == "visible";
    if (isBreak) {
      timer.reset();
    }
    setNewTime($("#breakTime"), -1, isBreak);
  });
  $("#breakAdd").on("click", function() {
    var isBreak = $("#break-text").css("visibility") == "visible";
    if (isBreak) {
      timer.reset();
    }
    setNewTime($("#breakTime"), 1, isBreak);
  });
  $("#totSub").on("click", function() {
    var isBreak = $("#break-text").css("visibility") == "visible";
    if (!isBreak) {
      timer.reset();
    }
    setNewTime($("#totTime"), -1, isBreak);
  });
  $("#totAdd").on("click", function() {
    var isBreak = $("#break-text").css("visibility") == "visible";
    if (!isBreak) {
      timer.reset();
    }
    setNewTime($("#totTime"), 1, isBreak);
  });

  function setNewTime(element, diff, isBreak) {
    var newTime = parseInt(element.text()) + diff;
    if (newTime < 1) {
      newTime = 1;
    } else if (newTime > 60) {
      newTime = 60;
    }
    element.text(newTime);

    if (!element.hasClass("break") && !isBreak) {
      $("#time-display").text(newTime + ":00");
    }
    if (element.hasClass("break") && isBreak) {
      $("#time-display").text(newTime + ":00");
    }
  }

  function startAnimation() {
    var leftBall = document.getElementById("leftBall");
    leftBall.className += " leftMove";

    var rightBall = document.getElementById("rightBall");
    rightBall.className += " rightMove";
  }

  function stopAnimation() {
    var leftBall = document.getElementById("leftBall");
    leftBall.className = "cord";

    var rightBall = document.getElementById("rightBall");
    rightBall.className = "cord";
  }

  function degToRad(degrees) {
    var factor = Math.PI / 180;
    return degrees * factor;
  }

  function Timer(duration) {
    this.previousTime;
    this.paused = true;
    this.elapsed = 0;
    this.duration = duration + 300;
    this.updateRate = 100;
    this.onTimeUp = function() {
      this.stop();
      stopAnimation();
      changePhase(this);
    };
    this.onTimeUpdate = function() {
      var timeLeft = this.duration - this.elapsed;
      this.displayTime();
    };
  }

  Timer.prototype.start = function() {
    this.paused = false;
    this.previousTime = new Date().getTime();
    this.keepCounting();
    startAnimation();
  };

  Timer.prototype.displayTime = function() {
    var timeLeft = this.duration - this.elapsed;
    var minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    var seconds = Math.floor((timeLeft / 1000) % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var formattedTime = minutes + ":" + seconds;
    $("#time-display").text(formattedTime);
  };

  Timer.prototype.keepCounting = function() {
    if (this.paused) {
      return true;
    }

    var now = new Date().getTime();
    var diff = now - this.previousTime;
    this.elapsed = this.elapsed + diff;
    this.previousTime = now;
    this.onTimeUpdate();
    if (this.elapsed >= this.duration) {
      this.stop();
      this.onTimeUp();
      return true;
    }
    var that = this;
    setTimeout(function() {
      that.keepCounting();
    }, this.updateRate);
  };

  Timer.prototype.stop = function() {
    this.paused = true;
    stopAnimation();
  };

  Timer.prototype.reset = function() {
    this.stop();
    this.elapsed = 0;
    this.displayTime();
  };

  Timer.prototype.setDuration = function(duration) {
    this.duration = duration + 300;
  };

  function changePhase(timer) {
    var isBreak = $("#break-text").css("visibility") == "visible";
    if (isBreak) {
      timer.setDuration($("#totTime").text() * 60 * 1000);
      $("#break-text").css("visibility", "hidden");
    } else {
      timer.setDuration($("#breakTime").text() * 60 * 1000);
      $("#break-text").css("visibility", "visible");
    }
    timer.reset();
    timer.start();
    playNotification();
  }

  function playNotification() {
    document.getElementById("notify").play();
  }

  function startTimer(timer) {
    var isBreak = $("#break-text").css("visibility") == "visible";
    if (isBreak) {
      timer.setDuration($("#breakTime").text() * 60 * 1000);
    } else {
      timer.setDuration($("#totTime").text() * 60 * 1000);
    }
    timer.start();
  }

  //section Jayson end//

  //section Firoz start//

  //section Firoz end//

  //section Piotr start//
  $("#puzzleBtn").click(() => {
    let section = $("#puzzleSection");
    section.toggle();
    $(section).html(
      '<object data="https://melonek.github.io/Team-Algorithm-Trivia/"/>'
    );
  });

  let timeSect = $("#timerSection");
  let exerciseSect = $("#exerciseSection");
  let puzzleSect = $("#puzzleSection");
  let trafficSect = $("#trafficSection");

  $("#timerBtn").on("click", function() {
    $(exerciseSect).hide();
    $(puzzleSect).hide();
    $(trafficSect).hide();
    $(timeSect).show();
  });

  $("#exerciseBtn").on("click", function() {
    $(exerciseSect).show();
    $(timeSect).hide();
    $(puzzleSect).hide();
    $(trafficSect).hide();
  });

  $("#puzzleBtn").on("click", function() {
    $(puzzleSect).show();
    $(timeSect).hide();
    $(trafficSect).hide();
    $(exerciseSect).hide();
  });

  $("#trafficBtn").on("click", function() {
    $(trafficSect).show();
    $(timeSect).hide();
    $(puzzleSect).hide();
    $(exerciseSect).hide();
  });
  //section Piotr end//
});
