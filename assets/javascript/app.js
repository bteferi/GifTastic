var topics=["makeup","travel", "animals","health","givingback","music","art"]
// Create a loop that appends a button for each string in the array

// when user click on the page this should grab 10 non moving gifs and place them on my page

// under every gif display its rating - Under every gif, display its rating (PG, G, so on).

//This data is provided by the GIPHY API.

// move to direction 6 which is to add a form

//=======================================================================================
//setting up api
var user_input =[];

var queryURL="http://api.giphy.com/v1/gifs/search?q=cat+food&api_key=T8WQV5Kku6r1KgW6Or6N7BvMpsKTjmcT";

$.ajax({url:queryURL,
  method:"GET"})
.done(function(response){
  console.log(response);
})


//============================================================
