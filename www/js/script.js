jQuery(function ($) {
  playerDitails = JSON.parse(localStorage.getItem("playerData"));
  // console.log("playerDitails_", playerDitails);
  var $bodyEl = $('body'),
    $sidedrawerEl = $('#sidedrawer');


  $(playerDitails).each(function( i, n ) {
    // console.log("playerDitails[i].value",n.name);
    $(".leftMenuItem").append("<li><strong class=''>" + n.name + "</strong></li>");
  });

  $('.onPage').on('click', function () {
    // $(".playList").addClass("hidden")
    // $(".player_listing").addClass("hidden")
    // $('.player_form').removeClass('hidden');
  });

  // $('.showPlayer').on('click', function () {
  //   $(".playList").addClass("hidden")
  //   $(".player_form").addClass("hidden")
  //   $('.player_listing').removeClass('hidden');
  // });
  // $('.playerListDiv').on('click', function () {
  //   $(".player_listing").addClass("hidden")
  //   $(".player_form").addClass("hidden")
  //   $('.playList').removeClass('hidden');
  // });



  var playerDataArr = [];
  $('.savebtn').on('click', function () {

    if (localStorage.getItem("playerData") === null) {
      console.log("localStorage is empty");

      var id = Math.floor(Math.random() * 101);
      var name = $('.playerName').val();
      var url = $('.playerUrl').val();

      var innerObj = {
        "id": id,
        "name": name,
        "url": url
      };
      // playerData.push({"id":id, "name": name, "url": url })
      console.log(innerObj);
      playerDataArr.push(innerObj)

      $('.playerName').val('');
      $('.playerUrl').val('');
      // console.log("playerData________", playerDataArr);
      localStorage.setItem("playerData", JSON.stringify(playerDataArr));
    } else {

      var existing = JSON.parse(localStorage.getItem("playerData"));

      var id = Math.floor(Math.random() * 101);
      var name = $('.playerName').val();
      var url = $('.playerUrl').val();

      var innerObj = {
        "id": id,
        "name": name,
        "url": url
      };
      console.log("innerObj", innerObj);

      playerDataArr.push(innerObj)
      for (var i = 0; i < existing.length; i++) {
        // console.log("old data", existing[i]);
        playerDataArr.push(existing[i]);
        // console.log("existing[i]", existing[i]);
      }
      console.log("new data playerDataArr", innerObj.name);
      // existing = existing ? existing.split(',') : [];
      // var id = Math.floor(Math.random() * 101);
      // var name = $('.playerName').val();
      // var url = $('.playerUrl').val();
      // var playerData_update = [];
      // var innerObj = {
      //   "id": id,
      //   "name": name,
      //   "url": url
      // };
      // playerData_update.push(innerObj)
      // playerDitails.push(playerData_update);
      // var existing = localStorage.getItem('myFavoriteSandwich');

      // Otherwise, convert the localStorage string to an array
      // existing = existing ? existing.split(',') : [];

      // existing.push(playerData_update);

      // localStorage.setItem('playerData', existing.toString());

      // localStorage.setItem(name, existing.toString());
      $('.playerName').val('');
      $('.playerUrl').val('');
    }
    localStorage.setItem("playerData", JSON.stringify(playerDataArr));
    location.reload();
  })
});