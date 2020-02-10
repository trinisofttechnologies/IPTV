jQuery(function ($) {
  playerDitails = JSON.parse(localStorage.getItem("playerData"));
  console.log("playerDitails_", playerDitails);
  var $bodyEl = $('body'),
    $sidedrawerEl = $('#sidedrawer');

  $(playerDitails).each(function (i, n) {
    $(".leftMenuItem").append("<li><strong class=''>" + n.name + "</strong></li>");
  });

  $('.onShowPage').on('click', function (evt) {
    var page = $(evt.currentTarget).attr('data-page');
    $(".onPage").addClass("hidden");
    $("." +page).removeClass("hidden");
    // console.log("click on this button");

    // // $(".playList").addClass("hidden")
    // // $(".player_listing").addClass("hidden")
    // // $('.player_form').removeClass('hidden');
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

      var id = Math.floor(Math.random() * 101);
      var name = $('.playerName').val();
      var url = $('.playerUrl').val();

      var innerObj = {
        "id": id,
        "name": name,
        "url": url
      };
      playerDataArr.push(innerObj)

      $('.playerName').val('');
      $('.playerUrl').val('');
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

      playerDataArr.push(innerObj)
      for (var i = 0; i < existing.length; i++) {
        playerDataArr.push(existing[i]);
      }
      $('.playerName').val('');
      $('.playerUrl').val('');
    }
    localStorage.setItem("playerData", JSON.stringify(playerDataArr));
    location.reload();
  })

  var array = [{
      name: "Chapter 1",
      category: "Tab_1",
      logo: "",
      description: "Lorem poreum",
      url: ""
    },
    {
      name: "Chapter 2",
      category: "Tab_2",
      logo: "",
      description: "Lorem poreum",
      url: ""
    }, {
      name: "Chapter 3",
      category: "Tab_3",
      logo: "",
      description: "Lorem poreum",
      url: ""
    }
  ];
  // var categories = getUnique(Array, "category");
  // console.log("categories", categories);
  
  function createTab(array){
    $(".mui-tabs__bar").html("");
    $.each(array, function (index, playlist) {
      $(".mui-tabs__bar").append('<li><a data-mui-toggle="tab" data-mui-controls="' +playlist.category +'">' +playlist.category +'</a></li>');
      $(".playListPage").append('<div class="mui-tabs__pane" id="' +playlist.category +'"></div>');
    });


  }
  function createList(playlist){
      $("#" +playlist.category).append('<ul class="mui-List"> <li class="mui-item avatar"> <img src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" alt="" class="circle"> <span class="title">chapter 2</span> <p>First Line <br> Second Line </p> </li><li class="mui-item avatar"> <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" alt="" class="circle"> <span class="title">chapter 1</span> <p>First Line <br> Second Line </p> </li> </ul>');
  }
  createTab(array);
  createList(array[0]);
});