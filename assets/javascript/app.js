var topics=["cat","dog","mouse"];
// Create a loop that appends a button for each string in the array



$("#search_button").on("click", function(event) {
  event.preventDefault();
  var search_box_value =$("#user_input").val().trim();

  var searched_item=$("<button>");

    // searched_item.attr("search_box_value")
 $("#new_buttons").append(searched_item);


});
//
    // search_item_butto.attr("data-button",search_item_button);
    //     search_item_button.addClass("button");
    //

//create a forloop that takes a user input and place it in the search box

// when user click on the page this should grab 10 non moving gifs and place them on my page

// under every gif display its rating - Under every gif, display its rating (PG, G, so on).

//This data is provided by the GIPHY API.

// move to direction 6 which is to add a form

//=======================================================================================
//setting up api
// var user_input =[];
//
// var queryURL="http://api.giphy.com/v1/gifs/search?q=cat+food&api_key=T8WQV5Kku6r1KgW6Or6N7BvMpsKTjmcT";
//
// $.ajax({url:queryURL,
//   method:"GET"})
// .done(function(response){
//   console.log(response);
// })


//============================================================
